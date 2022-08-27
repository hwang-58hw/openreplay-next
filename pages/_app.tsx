import "../styles/globals.css";
import type { AppProps } from "next/app";

import { TrackerProvider } from "../vendors";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TrackerProvider
      config={{
        projectKey: "",
      }}
    >
      <Component {...pageProps} />
    </TrackerProvider>
  );
}

export default MyApp;
