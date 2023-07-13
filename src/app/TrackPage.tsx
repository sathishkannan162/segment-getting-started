"use client";
import { AnalyticsProvider, useAnalytics } from "@/context/analytics";
import React, { useEffect } from "react";

export interface TrackPageProps {}

function TrackPage(props: TrackPageProps): React.JSX.Element {
  const { analytics } = useAnalytics();
  useEffect(() => {
    console.log("home page loaded");
    analytics.page();
  }, [analytics]);

  return <></>;
}

export default function TrackPageWrapper() {
  return (
    <AnalyticsProvider>
      <TrackPage />
    </AnalyticsProvider>
  );
}
