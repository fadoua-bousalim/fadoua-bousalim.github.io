import { siteConfig } from "../config";

// Build a lookup from skill name → skill object using the main skills config as the
// source of truth. Components use this instead of maintaining their own icon maps.
const skillLookup = new Map(siteConfig.skills.map((s) => [s.name, s]));

// Fallback for names used in project/experience tags that aren't in the skills config.
const fallbackIconMap: Record<string, string> = {
  Jupyter:          "jupyter",
  Pandas:           "pandas",
  "scikit-learn":   "scikitlearn",
  SQL:              "postgresql",
  R:                "r",
  "Looker Studio":  "looker",
  BQML:             "googlebigquery",
};

const fallbackColorMap: Record<string, string> = {
  Pandas: "ffffff",
  R:      "ffffff",
};

/**
 * Returns the icon image URL for a skill/tech name, or null if none is available.
 * Checks the main skills config first, then falls back to the static map above.
 */
export function getIconSrc(name: string): string | null {
  const skill = skillLookup.get(name);
  if (skill) {
    if (skill.iconSrc) return skill.iconSrc;
    if (skill.icon) {
      const color = skill.iconColor ? `/${skill.iconColor}` : "";
      return `https://cdn.simpleicons.org/${skill.icon}${color}`;
    }
    return null;
  }

  const slug = fallbackIconMap[name];
  if (slug) {
    const color = fallbackColorMap[name];
    return `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;
  }

  return null;
}
