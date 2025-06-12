'use client'
import React, { FC } from 'react'
import { useAnalysisStore } from '@/store/useVideoStore'
import { useRouter } from 'next/router'
const AnalysisResult: FC = () => {
  const result = useAnalysisStore((state) => state.result)
  const router = useRouter()
  if (!result?.analysis) return null
  if (!result) return null

  const { score, feedback,problem_joints } = result.analysis
  const feedbackList = feedback
    .split(/[.]\s*|\n+/)
    .map((f) => f.trim())
    .filter((f) => f.length > 0)
  
  // const problem_jointList = problem_joints
  //   .split(/[.]\s*|\n+/)
  //   .map((f) => f.trim())
  //   .filter((f) => f.length > 0)


  return (
    <div className="border-1 border-emerald-500 relative bg-white shadow-md rounded-lg p-4 w-full max-w-4xl mx-auto">
      <h2 className="text-6xl font-bold mb-4 text-center">분석 결과</h2>

      <div className="flex justify-end m-1.5 text-emerald-900 text-6xl">
        {score}점
        <p className="text-black text-2xl ml-2 mt-3">/100점</p>
      </div>

      <div className='w-full h-auto mx-auto'>
        <video 
        controls
        className='w-full h-auto rounded-lg '
        src={result.video_url}
        >
        </video>
      </div>

      <div className="flex md:grid-cols-2 gap-6 mt-4">
        <div>
          {result.exercise_name} - {result.body_part}
          <h1 className="text-5xl font-semibold mb-2 text-red-600">문제점:</h1>
          <ul className="space-y-1 text-sm break-words">
            {feedbackList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-[6px] w-2 h-2 rounded-full bg-red-500" />
                <span className="text-gray-700 text-2xl">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="flex md:grid-cols-2 gap-6 mt-4">
        <div>
          <h1 className="text-5xl font-semibold mb-2 text-red-600">문제관절:</h1>
          <ul className="space-y-1 text-sm break-words">
            {problem_jointList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-[6px] w-2 h-2 rounded-full bg-red-500" />
                <span className="text-gray-700 text-2xl">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
           <div className="mt-6 flex gap-4">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 rounded-md text-white bg-emerald-500 hover:bg-sky-400 transition"
        >
          ← 이전으로
        </button>
        </div>
    </div>
  )
}

export default AnalysisResult
