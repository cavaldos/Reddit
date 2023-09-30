import ReduxProvider from "~/app/ReduxProvider";
import { AppProps } from "next/app";

import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
export default App;
