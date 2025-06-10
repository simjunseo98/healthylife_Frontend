'use client'
import React, { useState, JSX } from 'react'

type ExerciseOptionProps = {
    onSelect: (exercise: string, part: string) => void
}

const EXERCISE_DATA: Record<string, string[]> = {
  bottom: [
    '스쿼트', '런지', '레그 프레스', '점프 스쿼트', '레그 익스텐션',
    '힙 쓰러스트', '스텝업', '불가리안 스플릿 스쿼트', '고블릿 스쿼트', '케틀벨 스윙',
    '사이드 런지', '월싯', '슬레드 푸시', '프론트 스쿼트', '하이풀 스쿼트',
    '리버스 런지', '스모 데드리프트', '덤벨 스쿼트', '덤벨 런지', '바벨 스쿼트',
  ],
  back: [
    '바벨로우', 'T바로우', '랫풀다운', '시티드 로우', '풀업', '벤트오버 로우',
    '슈러그', '원암 덤벨 로우', '굿모닝', '데드리프트',
  ],
  chest: [
    '벤치프레스', '덤벨 벤치프레스', '인클라인 벤치프레스', '푸쉬업', '딥스',
    '체스트 프레스 머신', '펙덱 플라이', '케이블 크로스오버', 'Svend 프레스', '디클라인 벤치프레스',
  ],
  shoulder: [
    '숄더프레스', '사이드 레터럴 레이즈', '프론트 레이즈', '업라이트 로우', '페이스풀',
    '덤벨 프레스', '밀리터리 프레스', '리어 델트 플라이', '케이블 레터럴 레이즈', '아놀드 프레스',
  ],
  arm: [
    '바벨 컬', '덤벨 컬', '해머 컬', '프리쳐 컬', '케이블 트라이셉스 푸쉬다운',
    '트라이셉스 익스텐션', '킥백', '이지바 컬', '치팅 컬', '디클라인 트라이셉스 익스텐션',
  ],
  core: [
    '플랭크', '마운틴 클라이머', '레그 레이즈', '크런치', '바이시클 크런치',
    '러시안 트위스트', '힙 브릿지', 'V업', '시저 킥', '토터치 크런치',
  ],
}


const PART_LABELS: Record<string, string> = {
    bottom: '하체',
    back:'등',
    chest: '가슴',
    shoulder:'어깨',
    arm:'팔',
    core: '코어',
}

const ExerciseSelector = ({
    onSelect,
}: ExerciseOptionProps): JSX.Element => {
    const [selectedPart, setSelectedPart] = useState<string | null>(null)

    return (
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto p-4">
            {!selectedPart ? (
                <div className="flex flex-col gap-4">
                    <p className="text-black text-5xl text-center mb-3">운동 부위를 선택하세요</p>
                    <div className="flex gap-3 justify-center flex-wrap">
                        {Object.keys(EXERCISE_DATA).map((partKey) => (
                            <button
                                key={partKey}
                                onClick={() => setSelectedPart(partKey)
                                
                                }
                                className=" bg-gray-600 text-white text-base sm:text-lg md:text-xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-xl hover:bg-gray-800 transition w-full text-center">
                                {PART_LABELS[partKey]}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    <p className="text-black text-center text-5xl">
                        어떤 운동인가요? ({PART_LABELS[selectedPart]})
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {EXERCISE_DATA[selectedPart].map((exercise) => (
                            <button
                                key={exercise}
                                onClick={() => onSelect(exercise, selectedPart)}
                                className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition whitespace-nowrap"
                            >
                                {exercise}
                            </button>
                        ))}
                    </div>
                    <button
                        className="text-2xl text-gray-300 underline text-center hover:text-black"
                        onClick={() => {
                        setSelectedPart(null)
                        }}
                    >
                        ← 부위 다시 선택
                    </button>
                </div>
            )}
        </div>
    )
}

export default ExerciseSelector
