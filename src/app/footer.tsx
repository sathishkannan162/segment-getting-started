"use client";

import { AnalyticsProvider, useAnalytics } from "@/context/analytics";
import React, { useEffect } from "react";

export interface FooterProps {}

function Footer(props: FooterProps): React.JSX.Element {
  const { analytics } = useAnalytics();
  useEffect(() => {
    console.log("user identified by analytics");
    analytics.identify("mobyDick", {
      name: "hello",
      email: "world@example.com",
    });
  }, [analytics]);
  return <div>Footer at the bottom</div>;
}

export default function FooterWrapper() {
  return (
    <AnalyticsProvider>
      <Footer />
    </AnalyticsProvider>
  );
}
