'use client';

import { useEffect, useState } from 'react';
import SlideList from './Slide/SlideList';

export default function SlideSection() {
  const [translateXValue, setTranslateXValue] = useState<number>(0);
  const [translateXValue2, setTranslateXValue2] = useState<number>(-2085);
  const maxTranslateX = -2085;

  useEffect(() => {
    const interval = setInterval(() => {
      const newTranslateX = (translateXValue - 0.67) % maxTranslateX;
      setTranslateXValue(newTranslateX);
    }, 10);

    return () => clearInterval(interval);
  }, [translateXValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTranslateX = (translateXValue2 + 0.67) % maxTranslateX;
      setTranslateXValue2(newTranslateX);
      if (translateXValue2 > 0) {
        setTranslateXValue2(-2085);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [translateXValue2]);

  return (
    <section className="flex flex-col gap-4 overflow-hidden bg-achromatic pb-24 pt-20">
      <div className="mx-auto mb-8 max-w-2xl px-6 lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-secondary">
          COMING SOON
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          더 많은 기능을 준비하고 있습니다
        </p>
      </div>
      <div
        className="flex"
        style={{ transform: `translateX(${translateXValue}px)` }}
      >
        <SlideList />
        <SlideList />
        <SlideList />
      </div>
      <div
        className="flex"
        style={{ transform: `translateX(${translateXValue2}px)` }}
      >
        <SlideList />
        <SlideList />
        <SlideList />
      </div>
    </section>
  );
}
