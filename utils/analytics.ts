export type OutboundPlacement =
  | 'announcement'
  | 'nav'
  | 'hero'
  | 'flow'
  | 'data'
  | 'pricing'
  | 'final'
  | 'footer';

/**
 * Sends outbound click event to Google Tag Manager dataLayer.
 * Never throws errors and never blocks navigation.
 */
export function trackOsmiOutbound(url: string, placement: OutboundPlacement): void {
  try {
    if (typeof window !== 'undefined') {
      const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: 'osmi_outbound_click',
        destination: url,
        placement: placement,
      });
    }
  } catch (e) {
    // Fail silently to avoid interfering with user action
  }
}
