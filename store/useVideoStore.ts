import { create } from 'zustand'
import type { UploadedVideo } from './type/uploadedVideo'

type AnalysisStore = {
    result: UploadedVideo | null
    setResult : (data: UploadedVideo) => void
    clearResult:()=>void
}

export const useAnalysisStore = create<AnalysisStore>((set) =>({
    result:null,
    setResult:(data) =>set ({ result:data}),
    clearResult:() => set({result: null}),
}));