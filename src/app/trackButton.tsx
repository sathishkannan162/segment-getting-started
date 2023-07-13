"use client";
import { AnalyticsProvider, useAnalytics } from "@/context/analytics";

import React from "react";

export interface trackButtonProps {}

function TrackButton(props: trackButtonProps): React.JSX.Element {
  const { analytics } = useAnalytics();
  return (
    <button
      onClick={() => {
        analytics.track("hello world");
      }}
    >
      Hello world
    </button>
  );
}

export default function Test(): React.JSX.Element {
  return (
    <AnalyticsProvider>
      <TrackButton />
    </AnalyticsProvider>
  );
}

