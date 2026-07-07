// Phosphor icon map (the brief's icons.set = "phosphor"). SSR entry renders
// pure inline SVG — no client context, safe for static export. ONE icon set
// site-wide; social CTAs use the phosphor brand logos.
import type { IconProps } from "@phosphor-icons/react";
import type { ComponentType } from "react";
import {
  Buildings,
  HouseLine,
  MapTrifold,
  Coins,
  Path,
  ShieldCheck,
  Blueprint,
  Storefront,
  Sparkle,
  PresentationChart,
  Handshake,
  Compass,
  Waves,
  Ruler,
  ChartLineUp,
  Scales,
  Leaf,
  Certificate,
  Users,
  MapPin,
  Phone,
  Envelope,
  Clock,
  WhatsappLogo,
  InstagramLogo,
  LinkedinLogo,
  ArrowRight,
  ArrowUpRight,
  CaretRight,
  List,
  X,
  FileText,
  CheckCircle,
  PaperPlaneTilt,
  Globe,
  ChatCircleText,
} from "@phosphor-icons/react/dist/ssr";

const icons: Record<string, ComponentType<IconProps>> = {
  Buildings,
  HouseLine,
  MapTrifold,
  Coins,
  Path,
  ShieldCheck,
  Blueprint,
  Storefront,
  Sparkle,
  PresentationChart,
  Handshake,
  Compass,
  Waves,
  Ruler,
  ChartLineUp,
  Scales,
  Leaf,
  Certificate,
  Users,
  MapPin,
  Phone,
  Envelope,
  Clock,
  WhatsappLogo,
  InstagramLogo,
  LinkedinLogo,
  ArrowRight,
  ArrowUpRight,
  CaretRight,
  List,
  X,
  FileText,
  CheckCircle,
  PaperPlaneTilt,
  Globe,
  ChatCircleText,
};

export function Icon({
  name,
  ...props
}: { name: string } & IconProps) {
  const Cmp = icons[name] ?? Compass;
  return <Cmp weight="regular" aria-hidden="true" {...props} />;
}

export type IconName = keyof typeof icons;
