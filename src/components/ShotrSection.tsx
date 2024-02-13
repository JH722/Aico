import VideoSrc from './Shorts/VideoSrc';

export default function ShortSection() {
  return (
    <section className="bg-[#1B1A24]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-center gap-12 sm:gap-8">
          <h2 className="text-4xl font-bold text-white">
            다양한 프리셋으로 쉽고 빠르고 한번에
          </h2>
          <a
            href="/signin"
            className="mt-4 flex h-14 items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-0"
          >
            시작하기
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          <VideoSrc src="https://s3.ap-northeast-2.amazonaws.com/returnzero-public-image/aico-clip/landing/main01.mp4#t=0.01" />
          <VideoSrc src="https://s3.ap-northeast-2.amazonaws.com/returnzero-public-image/aico-clip/landing/main02.mp4#t=0.01" />
          <VideoSrc src="https://s3.ap-northeast-2.amazonaws.com/returnzero-public-image/aico-clip/landing/main03.mp4#t=0.01" />
          <VideoSrc src="https://s3.ap-northeast-2.amazonaws.com/returnzero-public-image/aico-clip/landing/main04.mp4#t=0.01" />
        </div>
      </div>
    </section>
  );
}
