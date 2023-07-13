import React from "react";
import { AnalyticsBrowser } from "@segment/analytics-next";

const AnalyticsContext = React.createContext<
  | {
      analytics: AnalyticsBrowser;
    }
  | undefined
>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const writeKey = process.env.NEXT_PUBLIC_SEGEMENT_WRITE_KEY || "";
  const analytics = AnalyticsBrowser.load({ writeKey });
  return (
    <AnalyticsContext.Provider value={{ analytics }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Create an analytics hook that we can use with other components.
export const useAnalytics = () => {
  const result = React.useContext(AnalyticsContext);
  if (!result) {
    throw new Error("Context used outside of its Provider!");
  }
  return result;
};
