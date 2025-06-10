import React, { FC } from "react";
import ProgressBar from "../progressBar";

type AnalysisResultProps = {
    score : number
    feedback : string[]
}

const AnalysisResult:FC<AnalysisResultProps> = ({
    score,feedback,
    
}: AnalysisResultProps) =>{
    return(
    <div className="border-1 relative bg-white shadow-md rounded-lg p-4 w-full max-w-4xl mx-auto">
        <div className="flex justify-between">
        <h2 className="text-4xl font-bold mb-4">분석 결과</h2>
        <div className="flex m-1.5 text-fuchsia-900 text-4xl">
            {score}점
            <p className="text-black text-2xl">/ 100점</p>
        </div>
        </div>
     <ProgressBar
     progress={score}
     />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* 문제점 */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-red-600">문제점</h3>
          <ul className="space-y-1 text-sm break-words">
            {feedback.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-[6px] w-2 h-2 rounded-full bg-red-500" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    )
}
export default AnalysisResult;