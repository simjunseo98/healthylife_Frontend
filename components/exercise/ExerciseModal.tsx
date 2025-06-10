'use client'
import React from 'react'
import ExerciseOption from '@/components/exercise/ExerciseOption'

type Props = {
  onSelect: (exercise: string, part: string) => void
  onClose: () => void
}

const ExerciseModal = ({ onSelect, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-100 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-[600px] h-[500px] p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-5xl font-bold text-gray-500 hover:text-black cursor-pointer"
        >
          ×
        </button>
        <ExerciseOption
          onSelect={(exercise, part) => {
            onSelect(exercise, part)
          }}
        />
      </div>
    </div>
  )
}

export default ExerciseModal
