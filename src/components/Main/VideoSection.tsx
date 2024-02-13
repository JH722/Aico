'use client';
import { useState } from 'react';

export default function VideoSection() {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <section className="relative">
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl items-start justify-start px-6 pb-12 pt-10 sm:pb-16 lg:flex lg:px-8 lg:pt-32">
        <div className="mx-auto flex-shrink-0 lg:mx-0 lg:max-w-lg lg:pt-8">
          <h1
            style={{ lineHeight: 1.2 }}
            className="mt-16 text-4xl mr-20 font-bold tracking-tight text-gray-900 sm:text-5xl lg:mt-10"
          >
            단 <b className="text-secondary100">3번</b>의 클릭으로
            <br /> 만드는 <b className="text-secondary100">쇼츠</b>
          </h1>
          <p className="mt-6 text-xl font-bold text-gray-900">
            AICO로 한번에 쇼츠를 만들어 보세요
          </p>
          <ul className="list-disc pl-4">
            <li className="text-sm leading-6 text-gray-600">
              카드 등록 없이 바로 가능한 체험
            </li>
            <li className="text-sm leading-6 text-gray-600">
              설치 없이 웹에서 클릭 3번만으로
            </li>
            <li className="text-sm leading-6 text-gray-600">
              여러가지 프리셋으로 간편하게
            </li>
            <li className="text-sm leading-6 text-gray-600">
              튜토리얼도 필요없는 간단한 사용법
            </li>
          </ul>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              className="h-15 group relative mr-2 flex w-52 items-center justify-center gap-3 overflow-hidden rounded-full px-10 py-4 opacity-95 hover:opacity-90"
              href="/signin"
            >
              <div className="z-10 text-xl font-bold text-white ">시작하기</div>
              <div className="absolute h-52 w-52  animate-spin-slow  bg-gradient-to-t  from-[#9A4BFF] to-[#277FFF] group-disabled:bg-gray-500"></div>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl -translate-x-4 sm:mt-24 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none">
          <div className="my-8 ml-4 max-w-3xl sm:ml-0 sm:max-w-5xl sm:flex-none lg:max-w-none">
            <video
              className="w-[56rem] -translate-y-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:translate-y-0"
              playsInline
              loop
              autoPlay
              muted
              preload="metadata"
            >
              <source src="https://s3.ap-northeast-2.amazonaws.com/returnzero-public-image/aico-clip/landing/homepage_main_clip.mp4" />
            </video>
            <div className="mt-18 mx-2 sm:relative sm:m-0 sm:block sm:h-0 flex flex-col items-center justify-center">
              <div
                className="card static mt-3 w-full rounded-3xl bg-[#F4F4F4] bg-opacity-80  drop-shadow-2xl   sm:absolute sm:-top-24 sm:left-48 sm:block sm:w-[28rem] sm:min-w-[28rem] md:left-24 lg:-left-48 xl:-left-52"
                // style={{
                //   '--ratio-x': '-0.3410421098981585',
                //   '--ratio-y': '0.6388997395833333',
                // }}
              >
                <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 sm:p-10">
                  <div className="flex justify-center gap-1 rounded-full border border-primary40 px-3.5 py-1.5">
                    <div className="flex h-4 w-4 -translate-y-1 object-contain text-primary100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        fill="currentColor"
                      >
                        <path d="M17.3636 9.27273L18.5 6.77273L21 5.63636L18.5 4.5L17.3636 2L16.2273 4.5L13.7273 5.63636L16.2273 6.77273L17.3636 9.27273ZM10.5455 9.72727L8.27273 4.72727L6 9.72727L1 12L6 14.2727L8.27273 19.2727L10.5455 14.2727L15.5455 12L10.5455 9.72727ZM17.3636 14.7273L16.2273 17.2273L13.7273 18.3636L16.2273 19.5L17.3636 22L18.5 19.5L21 18.3636L18.5 17.2273L17.3636 14.7273Z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-primary100">
                      Shorts AI
                    </div>
                  </div>
                  <div className="px-9 text-center text-xl font-bold">
                    유튜브 검색을 통해 체험해보세요!
                  </div>
                  <div className="flex w-full items-center justify-start  rounded-full bg-white py-4 pl-6 pr-2">
                    <div className="text-[#ff0000]">
                      <svg
                        width="56"
                        height="38"
                        viewBox="0 0 56 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10"
                      >
                        <path
                          d="M54.8337 5.93415C54.1883 3.59713 52.2937 1.76058 49.8828 1.135C45.5127 0 28 0 28 0C28 0 10.4873 0 6.12183 1.135C3.7109 1.76058 1.81627 3.59713 1.17089 5.93415C0 10.1658 0 19 0 19C0 19 0 27.8342 1.17089 32.0659C1.81627 34.4029 3.7109 36.2394 6.12183 36.865C10.4873 38 28 38 28 38C28 38 45.5127 38 49.8782 36.865C52.2891 36.2394 54.1837 34.4029 54.8291 32.0659C56 27.8342 56 19 56 19C56 19 56 10.1658 54.8291 5.93415H54.8337Z"
                          fill="#FF0000"
                        ></path>
                        <path d="M22 27L36 19L22 11V27Z" fill="white"></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      className="sm:text-md w-full border-0 border-none pl-4 text-sm outline-none focus:outline-none focus:ring-offset-0"
                      placeholder="내 채널명 또는 영상제목을 입력해주세요."
                      value={searchValue}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto my-16 max-w-2xl sm:my-20 lg:my-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col justify-between">
              <dt className="flex  justify-start  gap-2 text-base font-semibold text-gray-900 sm:flex-col">
                <div className="flex h-5 w-5 min-w-[1.25rem] items-center  justify-center rounded-full px-1.5 text-xs text-white sm:mb-6 sm:h-8 sm:w-8 sm:text-sm bg-[#39B54A]">
                  1
                </div>
                <p className="font-medium">
                  쇼츠로 빠르게 채널 구독자수를 늘려보세요. 채널 유입의 70%가
                  쇼츠에서 발생한다는 사실, 아시나요?
                </p>
              </dt>
            </div>
            <div className="flex flex-col justify-between">
              <dt className="flex  justify-start  gap-2 text-base font-semibold text-gray-900 sm:flex-col">
                <div className="flex h-5 w-5 min-w-[1.25rem] items-center  justify-center rounded-full px-1.5 text-xs text-white sm:mb-6 sm:h-8 sm:w-8 sm:text-sm bg-[#27AAE1]">
                  2
                </div>
                <p className="font-medium">
                  쇼츠 제작부터 업로드까지 한번에! 더 이상 번거롭게 업로드하지
                  않아도 괜찮아요
                </p>
              </dt>
            </div>
            <div className="flex flex-col justify-between">
              <dt className="flex  justify-start  gap-2 text-base font-semibold text-gray-900 sm:flex-col">
                <div className="flex h-5 w-5 min-w-[1.25rem] items-center  justify-center rounded-full px-1.5 text-xs text-white sm:mb-6 sm:h-8 sm:w-8 sm:text-sm bg-[#EF4136]">
                  3
                </div>
                <p className="font-medium">
                  쇼츠 제작할 시간이 없다고요? AICO가 새로 업로드한 영상에서
                  자동으로 만들어 드릴게요
                </p>
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
