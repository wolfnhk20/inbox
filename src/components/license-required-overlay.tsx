import type { LicenseRequiredOverlayProps } from "./license-required-overlay-types";

// License gate removed — renders children directly with no paywall overlay.
export function LicenseRequiredOverlay({ children }: LicenseRequiredOverlayProps) {
	return <>{children}</>;
}
