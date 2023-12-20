import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import amplifyconfig from "@/src/amplifyconfiguration.json";

Amplify.configure(amplifyconfig, { ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
