export type OsmiPlacement =
  | 'announcement'
  | 'nav'
  | 'hero'
  | 'continuity'
  | 'process'
  | 'pricing'
  | 'faq'
  | 'footer';

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export function trackOsmiClick(destination: string, placement: OsmiPlacement) {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'osmi_outbound_click',
        destination,
        placement,
      });
    }
  } catch (err) {
    // 追蹤失敗不得阻止正常跳轉
    console.error('Tracking failed:', err);
  }
}
