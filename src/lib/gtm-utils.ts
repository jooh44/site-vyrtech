// gtm-utils.ts

declare global {
    interface Window {
        dataLayer: any[];
    }
}

export const GTM_ID = "GTM-KZGXGTPD";

export const pageview = (url: string) => {
    if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "pageview",
            page: url,
        });
    }
};

export const sendGTMEvent = (event: string, parameters?: Record<string, any>) => {
    if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event,
            ...parameters,
        });
    }
};
