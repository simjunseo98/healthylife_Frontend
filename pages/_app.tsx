import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="next-app">
    <div className="health-app">
      <Header />
  <Component {...pageProps} />
    </div>  
    </div>
  )
}
export default App;