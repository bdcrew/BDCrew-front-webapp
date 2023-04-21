import Layout from "@/components/basic/Layout";
import "@/styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric);
  // 구글 아날리틱스 보내기.
  // sendToGoogleAnalytics(metric);
};
