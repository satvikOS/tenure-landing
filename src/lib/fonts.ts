import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

/**
 * Display — Fraunces. An "old-style with personality" variable serif used with
 * restraint: big editorial headlines + the italic emphasis words. Optical sizing
 * (opsz) plus the SOFT/WONK axes give the institutional-record voice its warmth.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

/**
 * Body / UI — General Sans (self-hosted, Fontshare FFL). A precise modern grotesk
 * that is distinctive without shouting. Variable weight 200–700.
 */
export const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.woff2",
  display: "swap",
  variable: "--font-general",
  weight: "200 700",
});

/**
 * Utility / data — IBM Plex Mono. The "registrar" voice: record numbers, term
 * labels, and the product UI's data ride on this. Institutional, technical, true.
 */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex",
  weight: ["400", "500", "600"],
});
