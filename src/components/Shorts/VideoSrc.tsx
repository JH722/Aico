'use client';

import { useRef } from 'react';

type Props = {
  src: string;
};

export default function VideoSrc({ src }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideoOnHover = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideoOnHoverEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="group relative">
      <div
        className="mx-auto aspect-[9/16] h-72 overflow-hidden rounded-2xl bg-gray-200 group-hover:opacity-75 sm:h-56 lg:h-72 xl:h-96"
        onMouseEnter={playVideoOnHover}
        onMouseLeave={pauseVideoOnHoverEnd}
      >
        <video
          ref={videoRef}
          preload="metadata"
          src={src}
          playsInline
          muted
          className="aspect-[9/16] rounded-2xl"
        />
      </div>
    </div>
  );
}
