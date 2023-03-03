import "../public/css/styles.css";
import "../public/css/carousel.css";
import "../public/css/car-card.css";
import React from "react";
import { ThemePicker } from "vcc-ui";
import { StyleProvider } from "vcc-ui/dist/styling/style-provider";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  );
}
