import AnalysisResult from "@/components/exercise/AnalysisResult";

const Mypage = () => {
  return (
  <div className="w-full h-screen mt-2 max-w-[800px] mx-auto bg-white overflow-auto">
  <h1 className="p-4 text-4xl">()님의 마이페이지</h1>
  <div className="flex justify-around m-3">
    <div className="border-2 bg-gray-200 text-2xl px-10 py-3 rounded-2xl hover:bg-gray-300">업로드한 영상
      <p className="text-center">()</p>
    </div>
      <div className="border-2 bg-gray-200 text-2xl px-10 py-3 rounded-2xl hover:bg-gray-300">분석된 영상
        <p className="text-center">()</p>
      </div>
  </div>
  <div className=" h-screen mt-7">
    <h2 className="m-3 text-3xl">최근 분석결과</h2>
    <p className="text-6xl text-center">개발중</p>
  </div>

</div>

  );
};

export default Mypage;
