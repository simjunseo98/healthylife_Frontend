import React, {
  useState,
  useRef,
  ChangeEvent,
  DragEvent,
  FC,
  JSX,
} from 'react'
import ExerciseModal from '@/components/exercise/ExerciseModal'
import { useAnalysisStore } from '@/store/useVideoStore'
import { useRouter } from 'next/router'

type VideoUploadProps = {}

const VideoUpload: FC<VideoUploadProps> = (): JSX.Element => {
  const [exercise_name, setExercise_Type] = useState<string>('')
  const [body_Part, setBody_Part] = useState<string>('')
  const [isModal, setIsModal] = useState<boolean>(false)
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [video_file, setVideo_file] = useState<File | null>(null)
  const [videoPreview, setVideoPreview] = useState<string | null>(null)
  const dropRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const handleVideoChange = (file: File) => {
    if (!exercise_name || !body_Part) {
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
      if (duration > 31) {
        alert('30초 이하의 영상만 업로드 가능합니다.')
        URL.revokeObjectURL(videoURL)
        return
      }
      setVideo_file(file)
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

  const handleUpload = async () => {
    const token = sessionStorage.getItem('token')
    if (!token || !exercise_name || !body_Part || !video_file) {
      alert('필수 정보를 입력해주세요.')
      return
    }
    const formData = new FormData()
    formData.append('video_file', video_file)
    formData.append('exercise_name', exercise_name)
    formData.append('body_part', body_Part)

    try {
      setIsUploading(true)
      console.log('⏳ 서버로 업로드 요청 시작')
      const res = await fetch('http://127.0.0.1:8000/videos/upload/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`
        },
        body: formData,
      })
      if (!res.ok) {
        const errorText = await res.text()
        console.log("x", errorText)
        throw new Error('업로드 실패');
      }
      const result = await res.json()
      useAnalysisStore.getState().setResult(result)
      alert("업로드 및 분석이 완료되었습니다.")
      router.push('/result')


    } catch (err) {
      alert(`${err instanceof Error ? err.message : 'Unknown error'}`)
    } finally {
      setIsUploading(false)
      
    }
  }

  return (
    <div className="w-[90%] max-w-3xl rounded-xl">
      <div className='m-5 p-4'>
        <h2 className='text-5xl text-black'>첫번째로 <br />분석할 운동 종류를 정해보세요!</h2>
        <button
          onClick={() => setIsModal(true)}
          className='bg-emerald-500 hover:bg-sky-400 text-white px-6 py-2 m-7 rounded-lg hover:scale-110'
        >
          운동 선택하기
        </button>
        {exercise_name && body_Part && (
          <p className='text-3xl'>
            선택된 운동: <strong>{body_Part}</strong>
            ({exercise_name})
          </p>
        )}
      </div>

      <div
        ref={dropRef}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => {
          if (!exercise_name || !body_Part) {
            alert('운동 종류를 먼저 선택해주세여.')
            return
          }
          document.getElementById('fileInput')?.click()
        }}
        className="w-full aspect-video max-h-[50vh]
          bg-white border-[5px] border-emerald-300
          rounded-[35px]
          flex items-center justify-center
          cursor-pointer transition duration-300 ease-in-out"
      >
        {!videoPreview ? (
          <div className="flex flex-col items-center text-gray-800 text-opacity-70">
            <span className="text-2xl text-emerald-400">
              {exercise_name && body_Part
                ? '영상을 드래그해서 넣거나 클릭해보세요'
                : '운동을 먼저 선택한 후에 업로드 할 수 있습니다. '}
            </span>
          </div>
        ) : (
          <video
            controls
            className="w-full h-full object-cover rounded-4xl"
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
        <button
          onClick={handleUpload}
          disabled={isUploading}
          className={`
            mt-4
            ${isUploading ? 'bg-sky-700 cursor-not-allowed' : 'bg-emerald-500 hover:bg-sky-400'}
            text-white rounded-lg px-12 py-4 shadow-md transition hover:scale-110
          `}
        >
          {isUploading ? '분석 중...' : '분석하기'}
        </button>

        {isModal && (
          <ExerciseModal
            onClose={() => setIsModal(false)}
            onSelect={(exercise_name, body_part) => {
              setExercise_Type(exercise_name)
              setBody_Part(body_part)
              setIsModal(false)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default VideoUpload
