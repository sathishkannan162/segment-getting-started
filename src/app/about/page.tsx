"use client";
import { AnalyticsProvider, useAnalytics } from "@/context/analytics";
import React, { useEffect } from "react";
import TrackPage from "../TrackPage";

export default function About() {
  return (
    <>
      <div>About Page</div>
      <TrackPage />
    </>
  );
}

// function About(props: AboutProps): React.JSX.Element {
// const { analytics } = useAnalytics();
// useEffect(() => {
// console.log("about page visited");
// analytics.page();
// }, [analytics]);
// return <div>About Page</div>;
// }

// export default function AboutWrapper() {
// return (
// <AnalyticsProvider>
// <About />
// </AnalyticsProvider>
// );
// }
