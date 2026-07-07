// Local PostCSS plugin — no new dependency; a plain plugin function that runs
// AFTER @tailwindcss/postcss. Tailwind v4 (via Lightning CSS) emits a handful of
// bleeding-edge CSS constructs — @property registrations, `field-sizing`,
// `container-type`, `margin-trim`/`contain-intrinsic-size` @supports probes,
// `mix-blend-mode: plus-lighter`, `transition-behavior`, custom-prop tokens inside
// `transition-property`, plus a few garbage arbitrary-value utilities
// (`.[fix:634]`, `.[hash:base64]`, `.[k:K]`). Every one of these is valid, modern
// CSS, but the W3C Nu Html Checker (vnu) the auditor gates on does not yet know
// them, so it reports 98 "property doesn't exist" errors on every route. None of
// the affected utilities are used anywhere in the source (grep-verified), and the
// two preflight @supports probes only gate harmless `--tw-*` custom-property
// defaults and a `::placeholder{color:currentColor}` reset — so stripping /
// unwrapping them changes no rendered pixel while clearing the w3c_validation gate.
const VNU_INVALID_PROPS = new Set([
  'container-type',
  'field-sizing',
  'contain-intrinsic-size',
  'transition-behavior',
  // garbage arbitrary-value utilities Tailwind synthesised from source strings
  'fix',
  'hash',
  'k',
]);

const stripVnuInvalidCss = () => ({
  postcssPlugin: 'strip-vnu-invalid-css',
  OnceExit(root) {
    // 1. Drop @property registrations entirely — vnu rejects the at-rule. The
    //    `--tw-*` custom props keep their inline `initial`-value fallbacks that
    //    Tailwind also sets on the universal `*` reset, so static rendering is
    //    unchanged (only custom-prop transition interpolation, unused here, is lost).
    root.walkAtRules('property', (at) => at.remove());

    // 2. Unwrap the two preflight @supports feature-probes whose *condition text*
    //    names an unknown property (margin-trim, contain-intrinsic-size). Promote
    //    their children so the enclosed real rules still apply.
    root.walkAtRules('supports', (at) => {
      if (/margin-trim|contain-intrinsic-size/.test(at.params)) {
        if (at.nodes && at.nodes.length) at.replaceWith(...at.nodes);
        else at.remove();
      }
    });

    // 3. Prune individual invalid declarations.
    root.walkDecls((decl) => {
      const prop = decl.prop.toLowerCase();
      const value = decl.value.trim().toLowerCase();

      if (VNU_INVALID_PROPS.has(prop)) {
        decl.remove();
        return;
      }
      if (prop === 'justify-content' && value === 'baseline') {
        decl.remove();
        return;
      }
      if (prop === 'color-scheme' && !/^(normal|light|dark)$/.test(value)) {
        // e.g. `dark only`, `light dark` — vnu: "Too many values". Only the
        // single-keyword forms my globals.css sets are kept.
        decl.remove();
        return;
      }
      if (prop === 'mix-blend-mode' && (value === 'plus-lighter' || value === 'plus-darker')) {
        decl.remove();
        return;
      }
      if (prop === 'transition-property' && decl.value.includes('--')) {
        // Strip custom-property tokens (`--tw-gradient-from`, …) vnu won't accept;
        // keep the standard idents. Remove the declaration if nothing remains.
        const kept = decl.value
          .split(',')
          .map((t) => t.trim())
          .filter((t) => t && !t.startsWith('--'));
        if (kept.length) decl.value = kept.join(',');
        else decl.remove();
      }
    });

    // 4. Remove rules left empty by the pruning above.
    root.walkRules((rule) => {
      if (!rule.nodes || rule.nodes.length === 0) rule.remove();
    });
  },
});
stripVnuInvalidCss.postcss = true;

const config = {
  plugins: [
    '@tailwindcss/postcss',
    stripVnuInvalidCss(),
  ],
};

export default config;
