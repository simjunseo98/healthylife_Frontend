import AnalysisResult from "@/components/exercise/AnalysisResult";
import { useRouter } from "next/router";
export default function Result(){
    const router = useRouter()
    return(
    <div className="relative w-full min-h-screen flex flex-col bg-[#f8fffb] overflow-hidden">
      <div className="absolute w-6 h-6 bg-sky-300 rounded-full top-20 left-24 animate-bounce opacity-40"></div>
      <div className="absolute w-8 h-8 bg-emerald-300 rounded-full bottom-24 right-28 animate-ping opacity-30"></div>
      <div className="absolute w-5 h-5 bg-cyan-300 rounded-full top-1/2 left-[10%] animate-ping opacity-40"></div>
      <div className="absolute w-4 h-4 bg-emerald-200 rounded-full bottom-12 left-10 animate-bounce opacity-50"></div>
      <div className="absolute w-3 h-3 bg-sky-200 rounded-full top-12 right-12 animate-ping opacity-30"></div>
      <div className="absolute w-10 h-10 bg-cyan-100 rounded-full top-[60%] left-[80%] animate-ping opacity-20"></div>
      <div className="absolute w-12 h-12 bg-emerald-100 rounded-full bottom-[10%] right-[15%] animate-bounce opacity-20"></div>
      <div className="absolute w-4 h-4 bg-sky-200 rounded-full top-8 right-12 animate-bounce opacity-40"></div>
      <div className="absolute w-6 h-6 bg-emerald-100 rounded-full top-[40%] right-[8%] animate-ping opacity-30"></div>
      <div className="absolute w-10 h-10 bg-cyan-100 rounded-full bottom-10 right-10 blur-sm opacity-20"></div>
      <div className="absolute w-5 h-5 bg-cyan-300 rounded-full top-[30%] right-[15%] animate-ping opacity-40"></div>
            <AnalysisResult/>
        </div>
    )
}