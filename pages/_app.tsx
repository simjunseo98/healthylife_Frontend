import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router =useRouter();
  const pathname = router.pathname;
  const isNoHeader = pathname === "/"||
                     pathname === "/users/login" ||
                     pathname.startsWith("/users/signup");
  
  
  return (
    <div className="next-app">
    <div className="health-app">
    {! isNoHeader &&<Header />}
  <Component {...pageProps} />
    </div>  
    </div>
  )
}
export default App;