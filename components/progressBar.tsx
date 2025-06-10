import React, { FC } from 'react'

type ProgressBarProps = {
    progress : number
}

const ProgressBar: FC<ProgressBarProps> = ({progress})=>{
   return(
    <>
    <div className="w-full bg-gray-200 rounded-md overflow-hidden h-4 mt-4">
      <div
        className="bg-blue-500 h-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
      </div>
  
      <div className="flex justify-between text-xs text-gray-500 mt-1 px-[2px]">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
      </>
   ) 
}
export default ProgressBar