import { Analysis } from '@/store/type/analysis'

export type UploadedVideo = {
    id:number
    exercise_name:string
    body_part:string
    video_url:string
    uploaded_at?:string
    analysis:Analysis
}