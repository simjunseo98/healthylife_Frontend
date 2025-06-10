import AnalysisResult from '@/components/exercise/AnalysisResult';
import VideoUpload from '@/components/VideoUpload';
export default function Home() {
  return (
   <main className='min-h-screen items-center justify-center px-4 overflow-auto'>
      <div className='w-full flex flex-col items-center justify-center text-center'>
        {/* <p className='text-[25px] font-extrabold text-gray-800'>운동 영상을 <br/>업로드하고 분석 결과를 받아보세요.</p> */}
        <VideoUpload/>
      </div>
      <br/>
      <div className='min-h-screen mt-5'>
        <AnalysisResult
        score={80}
        feedback={["엉망엉망"]}
        />
      </div>
  </main>
  );
}
