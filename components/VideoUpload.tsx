'use client'
import React, {
  useState,
  useRef,
  ChangeEvent,
  DragEvent,
  FC,
  JSX,
} from 'react'
import ExerciseModal from '@/components/exercise/ExerciseModal'

type VideoUploadProps = {}

const VideoUpload: FC<VideoUploadProps> = (): JSX.Element => {
  const [exerciseType, setExerciseType] = useState<string>('')
  const [bodyPart, setBodyPart] = useState<string>('')
  const [isModal, setIsModal] = useState<boolean>(false)

  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [videoPreview, setVideoPreview] = useState<string | null>(null)
  const dropRef = useRef<HTMLDivElement | null>(null)

  const handleVideoChange = (file: File) => {
    if (!exerciseType || !bodyPart) {
      alert('운동 종류를 먼저 선택해주세요.')
      return
    }
    if (!file || !file.type.startsWith('video/')) {
      alert('영상 파일만 첨부 가능합니다.')
      return
    }

    const videoURL = URL.createObjectURL(file)
    const video = document.createElement('video')

    video.preload = 'metadata'
    video.src = videoURL

    video.onloadedmetadata = () => {
      const duration = video.duration
      if (duration > 11) {
        alert('10초 이하의 영상만 업로드 가능합니다.')
        URL.revokeObjectURL(videoURL)
        return
      }

      // ✅ 10초 이하일 경우만 업로드
      setVideoFile(file)
      setVideoPreview(videoURL)
    }

    video.onerror = () => {
      alert('비디오 정보를 불러올 수 없습니다.')
    }
  }

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleVideoChange(file)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) handleVideoChange(file)
  }

  const handleUpload = () => {
    if (!exerciseType || !bodyPart) {
      alert('운동 선택을 먼저 완료해주세요.')
      return
    }
    if (!videoFile) {
      alert('영상을 먼저 선택하세요.')
      return
    }
    console.log('전송 준비됨:', videoFile)
  }

  return (
    <div className="w-[90%] max-w-3xl rounded-xl">
      <div className='m-5 p-4'>
        <h2 className='text-5xl'>첫번째로 <br/>분석할 운동 종류를 정해보세요!</h2>
        <button onClick={()=>setIsModal(true)}
                className='bg-black text-white px-6 py-2 m-3 rounded-lg hover:bg-gray-400 hover:scale-110'>
                  운동 선택하기
        </button>
        {exerciseType && bodyPart && (
          <p className='text-3xl m-3'>선택된 운동: <strong>{bodyPart}</strong>
          ({exerciseType})</p>
        )}
      </div>
    
      <div
        ref={dropRef}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() =>{
          if (!exerciseType || !bodyPart){
            alert('운동 종류를 먼저 선택해주세여.')
            return
        } 
        document.getElementById('fileInput')?.click()}}
        className="w-full aspect-video max-h-[50vh]
          bg-gray-300 border-[5px] border-gray-900
          rounded-[10px]
          shadow-[inset_0_0_8px_rgba(255,255,255,0.1),0_8px_40px_rgba(0,0,0,0.6)]
          flex items-center justify-center
          cursor-pointer transition duration-300 ease-in-out"
      >
        {!videoPreview ? (
          <div className="flex flex-col items-center text-white text-opacity-70">
            <span className="text-lg">
              {exerciseType && bodyPart
                ? '영상을 드래그해서 넣거나 클릭해보세요'
                : '운동을 먼저 선택한 후에 업로드 할 수 있습니다. '}
            </span>
          </div>
        ) : (
          <video
            controls
            className="w-full h-full object-cover rounded-xl"
            src={videoPreview}
          />
        )}

        <input
          type="file"
          id="fileInput"
          accept="video/*"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="w-[60%] max-w-xl h-2 bg-gray-900 rounded-md" />
        <button
          onClick={handleUpload}
          className="
            mt-4
            bg-gray-900 text-white
            rounded-lg
            px-5 py-2
            shadow-md
            hover:bg-blue-700 transition
            whitespace-nowrap
            cursor-pointer
            hover:scale-110
          "
        >
          분석하기
        </button>
        
       {isModal && (
        <ExerciseModal
          onClose={() => setIsModal(false)}
          onSelect={(exercise, part) => {
            setExerciseType(exercise)
            setBodyPart(part)
            setIsModal(false)
          }}
        />
       )}
      </div>
    </div>
  )
}

export default VideoUpload
