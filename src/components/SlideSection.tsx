'use client';

import { useEffect, useState } from 'react';

export default function SlideSection() {
  const [translateXValue, setTranslateXValue] = useState(0);
  const [translateXValue2, setTranslateXValue2] = useState(-2085);
  const minTranslateX = 0;
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
        <div className="flex flex-none flex-nowrap gap-6 pr-6">
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5618 23.0605H27.4101V32.5005H8.5618C5.95501 32.5005 3.8418 30.3873 3.8418 27.7805C3.8418 25.1738 5.95501 23.0605 8.5618 23.0605Z"
                    fill="white"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H30.1618C31.2664 23.06 32.1618 22.1646 32.1618 21.06V5C32.1618 3.89543 31.2664 3 30.1618 3H8.5618Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H27.4418C30.0486 23.06 32.1618 20.9468 32.1618 18.34V7.72C32.1618 5.11322 30.0486 3 27.4418 3H8.5618Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3.8418 27.7812C3.8418 30.388 5.95501 32.5012 8.5618 32.5012H32.1618"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M27.4414 23.0605V32.5005"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              외국어 감지 및 자동 번역
            </dt>
            <dd className="text-xs text-gray-600">
              영상 내 다국어 사용시 자동으로 외국어를 감지하여 번역해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.83203 10.4551H24.5755C25.1278 10.4551 25.5755 10.9028 25.5755 11.4551V26.1985H10.832C10.2797 26.1985 9.83203 25.7508 9.83203 25.1985V10.4551Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M1.96094 10.4561C9.83978 9.66826 17.6973 9.66826 25.5761 10.4561C26.364 18.335 26.364 26.192 25.5761 34.0708"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.4229 1.92773C9.63506 9.80658 9.63506 17.6641 10.4229 25.5429C18.3018 26.3308 26.1587 26.3308 34.0376 25.5429"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              크롭 영역 추천
            </dt>
            <dd className="text-xs text-gray-600">
              영상 편집이 수월하도록 얼굴 위치를 자동으로 감지하여 크롭해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"></path>
                  <path
                    d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"
                    stroke="#4147D5"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1.92773 13.8209C1.92773 11.8682 3.51073 10.2852 5.46345 10.2852C7.41617 10.2852 8.99916 11.8681 8.99916 13.8209V28.6066C8.99916 30.5593 7.41617 32.1423 5.46345 32.1423C3.51073 32.1423 1.92773 30.5593 1.92773 28.6066V13.8209Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              유튜브 댓글 캡쳐
            </dt>
            <dd className="text-xs text-gray-600">
              ‘좋아요’ 반응이 많은 센스있는 댓글들을 편하게 쇼츠 영상 안에
              불러와 보여줄 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-[#4147D5]"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="4"
                    fill="#D7DFFF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                  <path d="M9 24.5468H11.8067V20.131H14.2391C17.3638 20.131 19.1601 18.2692 19.1601 15.5655C19.1601 12.8992 17.3919 11 14.3139 11H9V24.5468ZM11.8067 17.8669V13.3015H13.79C15.4553 13.3108 16.2692 14.2183 16.2599 15.5655C16.2692 16.9314 15.4553 17.8669 13.79 17.8669H11.8067Z"></path>
                  <path d="M20.8815 24.5468H23.6507V18.7651C23.6414 17.5208 24.5676 16.6507 25.8212 16.6507C26.2048 16.6507 26.738 16.7162 27 16.8004V14.3306C26.7568 14.2744 26.4012 14.237 26.1206 14.237C24.9792 14.237 24.0343 14.9012 23.6694 16.1455H23.5572V14.3867H20.8815V24.5468Z"></path>
                </svg>
              </div>
              레거시 텍스트 효과 지원
            </dt>
            <dd className="text-xs text-gray-600">
              다양한 자막과 핫한 화면 꾸미기 효과들이 계속 업데이트 될 거예요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"></path>
                  <path
                    d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M28.4099 14.5793C26.9127 13.678 25.2002 13.2017 23.4549 13.2012C22.0028 13.2003 20.5693 13.5288 19.2611 14.1623C17.953 14.7957 16.804 15.7177 15.8997 16.8595C14.9955 18.0013 14.3594 19.3335 14.0388 20.7567C13.7182 22.18 13.7214 23.6576 14.0482 25.0795C14.3749 26.5013 15.0168 27.8307 15.926 28.9686C16.8352 30.1064 17.9882 31.0233 19.2991 31.651C20.61 32.2787 22.045 32.6009 23.497 32.5937C24.709 32.5877 25.9067 32.3523 27.0282 31.9021L32.9868 32.8991C33.2656 32.9458 33.4938 32.6789 33.4044 32.4107L31.8339 27.6999C32.5854 26.3753 33.017 24.8883 33.0895 23.359C33.1726 21.607 32.7812 19.8653 31.9572 18.3192C31.1331 16.7731 29.9071 15.4805 28.4099 14.5793Z"
                    fill="#D7E0FF"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              화자별 자막 구분
            </dt>
            <dd className="text-xs text-gray-600">
              누가 말했는지 음성을 구분하고 말한 사람에 따라 자막을 다르게
              연출할 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8574 15.1445L4.00084 32.0011"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M13.5566 7.84766L16.181 10.472"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M20.2324 4L20.9748 7.63641"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M28.1543 22.4453L25.5299 19.8209"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M32 15.7676L28.3636 15.0252"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              AI 제목 추천 기능
            </dt>
            <dd className="text-xs text-gray-600">
              조회수에 중요한 역할을 하는 숏폼 제목, AI가 영상에 맞춰 매력적인
              제목으로 추천해 드려요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50044 28.089C9.63983 29.9919 11.0841 31.5657 12.9841 31.7407C16.7398 32.0865 20.2602 32.0865 24.0159 31.7407C25.9159 31.5657 27.3602 29.9919 27.4996 28.089C27.7375 24.8412 28 21.465 28 18C28 14.535 27.7375 11.1588 27.4996 7.91101C27.3602 6.0081 25.9159 4.43428 24.0159 4.25935C20.2602 3.91355 16.7398 3.91355 12.9841 4.25935C11.0841 4.43428 9.63983 6.0081 9.50043 7.91101C9.26252 11.1588 9 14.535 9 18C9 21.465 9.26252 24.8412 9.50044 28.089Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M16.7988 5.70117H20.2116"
                    stroke="#4147D5"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              AICO 모바일 앱 출시
            </dt>
            <dd className="text-xs text-gray-600">
              핸드폰에 저장된 수많은 세로형 영상들도 PC버전과 쉽게 연동할 수
              있어요.
            </dd>
          </div>
        </div>
        <div className="flex flex-none flex-nowrap gap-6 pr-6">
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5618 23.0605H27.4101V32.5005H8.5618C5.95501 32.5005 3.8418 30.3873 3.8418 27.7805C3.8418 25.1738 5.95501 23.0605 8.5618 23.0605Z"
                    fill="white"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H30.1618C31.2664 23.06 32.1618 22.1646 32.1618 21.06V5C32.1618 3.89543 31.2664 3 30.1618 3H8.5618Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H27.4418C30.0486 23.06 32.1618 20.9468 32.1618 18.34V7.72C32.1618 5.11322 30.0486 3 27.4418 3H8.5618Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3.8418 27.7812C3.8418 30.388 5.95501 32.5012 8.5618 32.5012H32.1618"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M27.4414 23.0605V32.5005"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              외국어 감지 및 자동 번역
            </dt>
            <dd className="text-xs text-gray-600">
              영상 내 다국어 사용시 자동으로 외국어를 감지하여 번역해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.83203 10.4551H24.5755C25.1278 10.4551 25.5755 10.9028 25.5755 11.4551V26.1985H10.832C10.2797 26.1985 9.83203 25.7508 9.83203 25.1985V10.4551Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M1.96094 10.4561C9.83978 9.66826 17.6973 9.66826 25.5761 10.4561C26.364 18.335 26.364 26.192 25.5761 34.0708"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.4229 1.92773C9.63506 9.80658 9.63506 17.6641 10.4229 25.5429C18.3018 26.3308 26.1587 26.3308 34.0376 25.5429"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              크롭 영역 추천
            </dt>
            <dd className="text-xs text-gray-600">
              영상 편집이 수월하도록 얼굴 위치를 자동으로 감지하여 크롭해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"></path>
                  <path
                    d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"
                    stroke="#4147D5"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1.92773 13.8209C1.92773 11.8682 3.51073 10.2852 5.46345 10.2852C7.41617 10.2852 8.99916 11.8681 8.99916 13.8209V28.6066C8.99916 30.5593 7.41617 32.1423 5.46345 32.1423C3.51073 32.1423 1.92773 30.5593 1.92773 28.6066V13.8209Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              유튜브 댓글 캡쳐
            </dt>
            <dd className="text-xs text-gray-600">
              ‘좋아요’ 반응이 많은 센스있는 댓글들을 편하게 쇼츠 영상 안에
              불러와 보여줄 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-[#4147D5]"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="4"
                    fill="#D7DFFF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                  <path d="M9 24.5468H11.8067V20.131H14.2391C17.3638 20.131 19.1601 18.2692 19.1601 15.5655C19.1601 12.8992 17.3919 11 14.3139 11H9V24.5468ZM11.8067 17.8669V13.3015H13.79C15.4553 13.3108 16.2692 14.2183 16.2599 15.5655C16.2692 16.9314 15.4553 17.8669 13.79 17.8669H11.8067Z"></path>
                  <path d="M20.8815 24.5468H23.6507V18.7651C23.6414 17.5208 24.5676 16.6507 25.8212 16.6507C26.2048 16.6507 26.738 16.7162 27 16.8004V14.3306C26.7568 14.2744 26.4012 14.237 26.1206 14.237C24.9792 14.237 24.0343 14.9012 23.6694 16.1455H23.5572V14.3867H20.8815V24.5468Z"></path>
                </svg>
              </div>
              레거시 텍스트 효과 지원
            </dt>
            <dd className="text-xs text-gray-600">
              다양한 자막과 핫한 화면 꾸미기 효과들이 계속 업데이트 될 거예요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"></path>
                  <path
                    d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M28.4099 14.5793C26.9127 13.678 25.2002 13.2017 23.4549 13.2012C22.0028 13.2003 20.5693 13.5288 19.2611 14.1623C17.953 14.7957 16.804 15.7177 15.8997 16.8595C14.9955 18.0013 14.3594 19.3335 14.0388 20.7567C13.7182 22.18 13.7214 23.6576 14.0482 25.0795C14.3749 26.5013 15.0168 27.8307 15.926 28.9686C16.8352 30.1064 17.9882 31.0233 19.2991 31.651C20.61 32.2787 22.045 32.6009 23.497 32.5937C24.709 32.5877 25.9067 32.3523 27.0282 31.9021L32.9868 32.8991C33.2656 32.9458 33.4938 32.6789 33.4044 32.4107L31.8339 27.6999C32.5854 26.3753 33.017 24.8883 33.0895 23.359C33.1726 21.607 32.7812 19.8653 31.9572 18.3192C31.1331 16.7731 29.9071 15.4805 28.4099 14.5793Z"
                    fill="#D7E0FF"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              화자별 자막 구분
            </dt>
            <dd className="text-xs text-gray-600">
              누가 말했는지 음성을 구분하고 말한 사람에 따라 자막을 다르게
              연출할 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8574 15.1445L4.00084 32.0011"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M13.5566 7.84766L16.181 10.472"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M20.2324 4L20.9748 7.63641"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M28.1543 22.4453L25.5299 19.8209"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M32 15.7676L28.3636 15.0252"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              AI 제목 추천 기능
            </dt>
            <dd className="text-xs text-gray-600">
              조회수에 중요한 역할을 하는 숏폼 제목, AI가 영상에 맞춰 매력적인
              제목으로 추천해 드려요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50044 28.089C9.63983 29.9919 11.0841 31.5657 12.9841 31.7407C16.7398 32.0865 20.2602 32.0865 24.0159 31.7407C25.9159 31.5657 27.3602 29.9919 27.4996 28.089C27.7375 24.8412 28 21.465 28 18C28 14.535 27.7375 11.1588 27.4996 7.91101C27.3602 6.0081 25.9159 4.43428 24.0159 4.25935C20.2602 3.91355 16.7398 3.91355 12.9841 4.25935C11.0841 4.43428 9.63983 6.0081 9.50043 7.91101C9.26252 11.1588 9 14.535 9 18C9 21.465 9.26252 24.8412 9.50044 28.089Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M16.7988 5.70117H20.2116"
                    stroke="#4147D5"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              AICO 모바일 앱 출시
            </dt>
            <dd className="text-xs text-gray-600">
              핸드폰에 저장된 수많은 세로형 영상들도 PC버전과 쉽게 연동할 수
              있어요.
            </dd>
          </div>
        </div>
        <div className="flex flex-none flex-nowrap gap-6 pr-6">
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5618 23.0605H27.4101V32.5005H8.5618C5.95501 32.5005 3.8418 30.3873 3.8418 27.7805C3.8418 25.1738 5.95501 23.0605 8.5618 23.0605Z"
                    fill="white"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H30.1618C31.2664 23.06 32.1618 22.1646 32.1618 21.06V5C32.1618 3.89543 31.2664 3 30.1618 3H8.5618Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H27.4418C30.0486 23.06 32.1618 20.9468 32.1618 18.34V7.72C32.1618 5.11322 30.0486 3 27.4418 3H8.5618Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3.8418 27.7812C3.8418 30.388 5.95501 32.5012 8.5618 32.5012H32.1618"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M27.4414 23.0605V32.5005"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              외국어 감지 및 자동 번역
            </dt>
            <dd className="text-xs text-gray-600">
              영상 내 다국어 사용시 자동으로 외국어를 감지하여 번역해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.83203 10.4551H24.5755C25.1278 10.4551 25.5755 10.9028 25.5755 11.4551V26.1985H10.832C10.2797 26.1985 9.83203 25.7508 9.83203 25.1985V10.4551Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M1.96094 10.4561C9.83978 9.66826 17.6973 9.66826 25.5761 10.4561C26.364 18.335 26.364 26.192 25.5761 34.0708"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.4229 1.92773C9.63506 9.80658 9.63506 17.6641 10.4229 25.5429C18.3018 26.3308 26.1587 26.3308 34.0376 25.5429"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              크롭 영역 추천
            </dt>
            <dd className="text-xs text-gray-600">
              영상 편집이 수월하도록 얼굴 위치를 자동으로 감지하여 크롭해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"></path>
                  <path
                    d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"
                    stroke="#4147D5"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1.92773 13.8209C1.92773 11.8682 3.51073 10.2852 5.46345 10.2852C7.41617 10.2852 8.99916 11.8681 8.99916 13.8209V28.6066C8.99916 30.5593 7.41617 32.1423 5.46345 32.1423C3.51073 32.1423 1.92773 30.5593 1.92773 28.6066V13.8209Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              유튜브 댓글 캡쳐
            </dt>
            <dd className="text-xs text-gray-600">
              ‘좋아요’ 반응이 많은 센스있는 댓글들을 편하게 쇼츠 영상 안에
              불러와 보여줄 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-[#4147D5]"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="4"
                    fill="#D7DFFF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                  <path d="M9 24.5468H11.8067V20.131H14.2391C17.3638 20.131 19.1601 18.2692 19.1601 15.5655C19.1601 12.8992 17.3919 11 14.3139 11H9V24.5468ZM11.8067 17.8669V13.3015H13.79C15.4553 13.3108 16.2692 14.2183 16.2599 15.5655C16.2692 16.9314 15.4553 17.8669 13.79 17.8669H11.8067Z"></path>
                  <path d="M20.8815 24.5468H23.6507V18.7651C23.6414 17.5208 24.5676 16.6507 25.8212 16.6507C26.2048 16.6507 26.738 16.7162 27 16.8004V14.3306C26.7568 14.2744 26.4012 14.237 26.1206 14.237C24.9792 14.237 24.0343 14.9012 23.6694 16.1455H23.5572V14.3867H20.8815V24.5468Z"></path>
                </svg>
              </div>
              레거시 텍스트 효과 지원
            </dt>
            <dd className="text-xs text-gray-600">
              다양한 자막과 핫한 화면 꾸미기 효과들이 계속 업데이트 될 거예요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"></path>
                  <path
                    d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M28.4099 14.5793C26.9127 13.678 25.2002 13.2017 23.4549 13.2012C22.0028 13.2003 20.5693 13.5288 19.2611 14.1623C17.953 14.7957 16.804 15.7177 15.8997 16.8595C14.9955 18.0013 14.3594 19.3335 14.0388 20.7567C13.7182 22.18 13.7214 23.6576 14.0482 25.0795C14.3749 26.5013 15.0168 27.8307 15.926 28.9686C16.8352 30.1064 17.9882 31.0233 19.2991 31.651C20.61 32.2787 22.045 32.6009 23.497 32.5937C24.709 32.5877 25.9067 32.3523 27.0282 31.9021L32.9868 32.8991C33.2656 32.9458 33.4938 32.6789 33.4044 32.4107L31.8339 27.6999C32.5854 26.3753 33.017 24.8883 33.0895 23.359C33.1726 21.607 32.7812 19.8653 31.9572 18.3192C31.1331 16.7731 29.9071 15.4805 28.4099 14.5793Z"
                    fill="#D7E0FF"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              화자별 자막 구분
            </dt>
            <dd className="text-xs text-gray-600">
              누가 말했는지 음성을 구분하고 말한 사람에 따라 자막을 다르게
              연출할 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8574 15.1445L4.00084 32.0011"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M13.5566 7.84766L16.181 10.472"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M20.2324 4L20.9748 7.63641"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M28.1543 22.4453L25.5299 19.8209"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M32 15.7676L28.3636 15.0252"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              AI 제목 추천 기능
            </dt>
            <dd className="text-xs text-gray-600">
              조회수에 중요한 역할을 하는 숏폼 제목, AI가 영상에 맞춰 매력적인
              제목으로 추천해 드려요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50044 28.089C9.63983 29.9919 11.0841 31.5657 12.9841 31.7407C16.7398 32.0865 20.2602 32.0865 24.0159 31.7407C25.9159 31.5657 27.3602 29.9919 27.4996 28.089C27.7375 24.8412 28 21.465 28 18C28 14.535 27.7375 11.1588 27.4996 7.91101C27.3602 6.0081 25.9159 4.43428 24.0159 4.25935C20.2602 3.91355 16.7398 3.91355 12.9841 4.25935C11.0841 4.43428 9.63983 6.0081 9.50043 7.91101C9.26252 11.1588 9 14.535 9 18C9 21.465 9.26252 24.8412 9.50044 28.089Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M16.7988 5.70117H20.2116"
                    stroke="#4147D5"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              AICO 모바일 앱 출시
            </dt>
            <dd className="text-xs text-gray-600">
              핸드폰에 저장된 수많은 세로형 영상들도 PC버전과 쉽게 연동할 수
              있어요.
            </dd>
          </div>
        </div>
      </div>
      <div
        className="flex"
        style={{ transform: `translateX(${translateXValue2}px)` }}
      >
        <div className="flex flex-none flex-nowrap gap-6 pr-6">
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5618 23.0605H27.4101V32.5005H8.5618C5.95501 32.5005 3.8418 30.3873 3.8418 27.7805C3.8418 25.1738 5.95501 23.0605 8.5618 23.0605Z"
                    fill="white"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H30.1618C31.2664 23.06 32.1618 22.1646 32.1618 21.06V5C32.1618 3.89543 31.2664 3 30.1618 3H8.5618Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H27.4418C30.0486 23.06 32.1618 20.9468 32.1618 18.34V7.72C32.1618 5.11322 30.0486 3 27.4418 3H8.5618Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3.8418 27.7812C3.8418 30.388 5.95501 32.5012 8.5618 32.5012H32.1618"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M27.4414 23.0605V32.5005"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              외국어 감지 및 자동 번역
            </dt>
            <dd className="text-xs text-gray-600">
              영상 내 다국어 사용시 자동으로 외국어를 감지하여 번역해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.83203 10.4551H24.5755C25.1278 10.4551 25.5755 10.9028 25.5755 11.4551V26.1985H10.832C10.2797 26.1985 9.83203 25.7508 9.83203 25.1985V10.4551Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M1.96094 10.4561C9.83978 9.66826 17.6973 9.66826 25.5761 10.4561C26.364 18.335 26.364 26.192 25.5761 34.0708"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.4229 1.92773C9.63506 9.80658 9.63506 17.6641 10.4229 25.5429C18.3018 26.3308 26.1587 26.3308 34.0376 25.5429"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              크롭 영역 추천
            </dt>
            <dd className="text-xs text-gray-600">
              영상 편집이 수월하도록 얼굴 위치를 자동으로 감지하여 크롭해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"></path>
                  <path
                    d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"
                    stroke="#4147D5"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1.92773 13.8209C1.92773 11.8682 3.51073 10.2852 5.46345 10.2852C7.41617 10.2852 8.99916 11.8681 8.99916 13.8209V28.6066C8.99916 30.5593 7.41617 32.1423 5.46345 32.1423C3.51073 32.1423 1.92773 30.5593 1.92773 28.6066V13.8209Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              유튜브 댓글 캡쳐
            </dt>
            <dd className="text-xs text-gray-600">
              ‘좋아요’ 반응이 많은 센스있는 댓글들을 편하게 쇼츠 영상 안에
              불러와 보여줄 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-[#4147D5]"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="4"
                    fill="#D7DFFF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                  <path d="M9 24.5468H11.8067V20.131H14.2391C17.3638 20.131 19.1601 18.2692 19.1601 15.5655C19.1601 12.8992 17.3919 11 14.3139 11H9V24.5468ZM11.8067 17.8669V13.3015H13.79C15.4553 13.3108 16.2692 14.2183 16.2599 15.5655C16.2692 16.9314 15.4553 17.8669 13.79 17.8669H11.8067Z"></path>
                  <path d="M20.8815 24.5468H23.6507V18.7651C23.6414 17.5208 24.5676 16.6507 25.8212 16.6507C26.2048 16.6507 26.738 16.7162 27 16.8004V14.3306C26.7568 14.2744 26.4012 14.237 26.1206 14.237C24.9792 14.237 24.0343 14.9012 23.6694 16.1455H23.5572V14.3867H20.8815V24.5468Z"></path>
                </svg>
              </div>
              레거시 텍스트 효과 지원
            </dt>
            <dd className="text-xs text-gray-600">
              다양한 자막과 핫한 화면 꾸미기 효과들이 계속 업데이트 될 거예요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"></path>
                  <path
                    d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M28.4099 14.5793C26.9127 13.678 25.2002 13.2017 23.4549 13.2012C22.0028 13.2003 20.5693 13.5288 19.2611 14.1623C17.953 14.7957 16.804 15.7177 15.8997 16.8595C14.9955 18.0013 14.3594 19.3335 14.0388 20.7567C13.7182 22.18 13.7214 23.6576 14.0482 25.0795C14.3749 26.5013 15.0168 27.8307 15.926 28.9686C16.8352 30.1064 17.9882 31.0233 19.2991 31.651C20.61 32.2787 22.045 32.6009 23.497 32.5937C24.709 32.5877 25.9067 32.3523 27.0282 31.9021L32.9868 32.8991C33.2656 32.9458 33.4938 32.6789 33.4044 32.4107L31.8339 27.6999C32.5854 26.3753 33.017 24.8883 33.0895 23.359C33.1726 21.607 32.7812 19.8653 31.9572 18.3192C31.1331 16.7731 29.9071 15.4805 28.4099 14.5793Z"
                    fill="#D7E0FF"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              화자별 자막 구분
            </dt>
            <dd className="text-xs text-gray-600">
              누가 말했는지 음성을 구분하고 말한 사람에 따라 자막을 다르게
              연출할 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8574 15.1445L4.00084 32.0011"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M13.5566 7.84766L16.181 10.472"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M20.2324 4L20.9748 7.63641"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M28.1543 22.4453L25.5299 19.8209"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M32 15.7676L28.3636 15.0252"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              AI 제목 추천 기능
            </dt>
            <dd className="text-xs text-gray-600">
              조회수에 중요한 역할을 하는 숏폼 제목, AI가 영상에 맞춰 매력적인
              제목으로 추천해 드려요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50044 28.089C9.63983 29.9919 11.0841 31.5657 12.9841 31.7407C16.7398 32.0865 20.2602 32.0865 24.0159 31.7407C25.9159 31.5657 27.3602 29.9919 27.4996 28.089C27.7375 24.8412 28 21.465 28 18C28 14.535 27.7375 11.1588 27.4996 7.91101C27.3602 6.0081 25.9159 4.43428 24.0159 4.25935C20.2602 3.91355 16.7398 3.91355 12.9841 4.25935C11.0841 4.43428 9.63983 6.0081 9.50043 7.91101C9.26252 11.1588 9 14.535 9 18C9 21.465 9.26252 24.8412 9.50044 28.089Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M16.7988 5.70117H20.2116"
                    stroke="#4147D5"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              AICO 모바일 앱 출시
            </dt>
            <dd className="text-xs text-gray-600">
              핸드폰에 저장된 수많은 세로형 영상들도 PC버전과 쉽게 연동할 수
              있어요.
            </dd>
          </div>
        </div>
        <div className="flex flex-none flex-nowrap gap-6 pr-6">
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5618 23.0605H27.4101V32.5005H8.5618C5.95501 32.5005 3.8418 30.3873 3.8418 27.7805C3.8418 25.1738 5.95501 23.0605 8.5618 23.0605Z"
                    fill="white"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H30.1618C31.2664 23.06 32.1618 22.1646 32.1618 21.06V5C32.1618 3.89543 31.2664 3 30.1618 3H8.5618Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H27.4418C30.0486 23.06 32.1618 20.9468 32.1618 18.34V7.72C32.1618 5.11322 30.0486 3 27.4418 3H8.5618Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3.8418 27.7812C3.8418 30.388 5.95501 32.5012 8.5618 32.5012H32.1618"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M27.4414 23.0605V32.5005"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              외국어 감지 및 자동 번역
            </dt>
            <dd className="text-xs text-gray-600">
              영상 내 다국어 사용시 자동으로 외국어를 감지하여 번역해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.83203 10.4551H24.5755C25.1278 10.4551 25.5755 10.9028 25.5755 11.4551V26.1985H10.832C10.2797 26.1985 9.83203 25.7508 9.83203 25.1985V10.4551Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M1.96094 10.4561C9.83978 9.66826 17.6973 9.66826 25.5761 10.4561C26.364 18.335 26.364 26.192 25.5761 34.0708"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.4229 1.92773C9.63506 9.80658 9.63506 17.6641 10.4229 25.5429C18.3018 26.3308 26.1587 26.3308 34.0376 25.5429"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              크롭 영역 추천
            </dt>
            <dd className="text-xs text-gray-600">
              영상 편집이 수월하도록 얼굴 위치를 자동으로 감지하여 크롭해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"></path>
                  <path
                    d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"
                    stroke="#4147D5"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1.92773 13.8209C1.92773 11.8682 3.51073 10.2852 5.46345 10.2852C7.41617 10.2852 8.99916 11.8681 8.99916 13.8209V28.6066C8.99916 30.5593 7.41617 32.1423 5.46345 32.1423C3.51073 32.1423 1.92773 30.5593 1.92773 28.6066V13.8209Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              유튜브 댓글 캡쳐
            </dt>
            <dd className="text-xs text-gray-600">
              ‘좋아요’ 반응이 많은 센스있는 댓글들을 편하게 쇼츠 영상 안에
              불러와 보여줄 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-[#4147D5]"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="4"
                    fill="#D7DFFF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                  <path d="M9 24.5468H11.8067V20.131H14.2391C17.3638 20.131 19.1601 18.2692 19.1601 15.5655C19.1601 12.8992 17.3919 11 14.3139 11H9V24.5468ZM11.8067 17.8669V13.3015H13.79C15.4553 13.3108 16.2692 14.2183 16.2599 15.5655C16.2692 16.9314 15.4553 17.8669 13.79 17.8669H11.8067Z"></path>
                  <path d="M20.8815 24.5468H23.6507V18.7651C23.6414 17.5208 24.5676 16.6507 25.8212 16.6507C26.2048 16.6507 26.738 16.7162 27 16.8004V14.3306C26.7568 14.2744 26.4012 14.237 26.1206 14.237C24.9792 14.237 24.0343 14.9012 23.6694 16.1455H23.5572V14.3867H20.8815V24.5468Z"></path>
                </svg>
              </div>
              레거시 텍스트 효과 지원
            </dt>
            <dd className="text-xs text-gray-600">
              다양한 자막과 핫한 화면 꾸미기 효과들이 계속 업데이트 될 거예요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"></path>
                  <path
                    d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M28.4099 14.5793C26.9127 13.678 25.2002 13.2017 23.4549 13.2012C22.0028 13.2003 20.5693 13.5288 19.2611 14.1623C17.953 14.7957 16.804 15.7177 15.8997 16.8595C14.9955 18.0013 14.3594 19.3335 14.0388 20.7567C13.7182 22.18 13.7214 23.6576 14.0482 25.0795C14.3749 26.5013 15.0168 27.8307 15.926 28.9686C16.8352 30.1064 17.9882 31.0233 19.2991 31.651C20.61 32.2787 22.045 32.6009 23.497 32.5937C24.709 32.5877 25.9067 32.3523 27.0282 31.9021L32.9868 32.8991C33.2656 32.9458 33.4938 32.6789 33.4044 32.4107L31.8339 27.6999C32.5854 26.3753 33.017 24.8883 33.0895 23.359C33.1726 21.607 32.7812 19.8653 31.9572 18.3192C31.1331 16.7731 29.9071 15.4805 28.4099 14.5793Z"
                    fill="#D7E0FF"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              화자별 자막 구분
            </dt>
            <dd className="text-xs text-gray-600">
              누가 말했는지 음성을 구분하고 말한 사람에 따라 자막을 다르게
              연출할 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8574 15.1445L4.00084 32.0011"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M13.5566 7.84766L16.181 10.472"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M20.2324 4L20.9748 7.63641"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M28.1543 22.4453L25.5299 19.8209"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M32 15.7676L28.3636 15.0252"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              AI 제목 추천 기능
            </dt>
            <dd className="text-xs text-gray-600">
              조회수에 중요한 역할을 하는 숏폼 제목, AI가 영상에 맞춰 매력적인
              제목으로 추천해 드려요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50044 28.089C9.63983 29.9919 11.0841 31.5657 12.9841 31.7407C16.7398 32.0865 20.2602 32.0865 24.0159 31.7407C25.9159 31.5657 27.3602 29.9919 27.4996 28.089C27.7375 24.8412 28 21.465 28 18C28 14.535 27.7375 11.1588 27.4996 7.91101C27.3602 6.0081 25.9159 4.43428 24.0159 4.25935C20.2602 3.91355 16.7398 3.91355 12.9841 4.25935C11.0841 4.43428 9.63983 6.0081 9.50043 7.91101C9.26252 11.1588 9 14.535 9 18C9 21.465 9.26252 24.8412 9.50044 28.089Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M16.7988 5.70117H20.2116"
                    stroke="#4147D5"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              AICO 모바일 앱 출시
            </dt>
            <dd className="text-xs text-gray-600">
              핸드폰에 저장된 수많은 세로형 영상들도 PC버전과 쉽게 연동할 수
              있어요.
            </dd>
          </div>
        </div>
        <div className="flex flex-none flex-nowrap gap-6 pr-6">
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5618 23.0605H27.4101V32.5005H8.5618C5.95501 32.5005 3.8418 30.3873 3.8418 27.7805C3.8418 25.1738 5.95501 23.0605 8.5618 23.0605Z"
                    fill="white"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H30.1618C31.2664 23.06 32.1618 22.1646 32.1618 21.06V5C32.1618 3.89543 31.2664 3 30.1618 3H8.5618Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M8.5618 3C5.95501 3 3.8418 5.11322 3.8418 7.72V27.78C3.8418 25.1732 5.95501 23.06 8.5618 23.06H27.4418C30.0486 23.06 32.1618 20.9468 32.1618 18.34V7.72C32.1618 5.11322 30.0486 3 27.4418 3H8.5618Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3.8418 27.7812C3.8418 30.388 5.95501 32.5012 8.5618 32.5012H32.1618"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M27.4414 23.0605V32.5005"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              외국어 감지 및 자동 번역
            </dt>
            <dd className="text-xs text-gray-600">
              영상 내 다국어 사용시 자동으로 외국어를 감지하여 번역해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.83203 10.4551H24.5755C25.1278 10.4551 25.5755 10.9028 25.5755 11.4551V26.1985H10.832C10.2797 26.1985 9.83203 25.7508 9.83203 25.1985V10.4551Z"
                    fill="#D7E0FF"
                  ></path>
                  <path
                    d="M1.96094 10.4561C9.83978 9.66826 17.6973 9.66826 25.5761 10.4561C26.364 18.335 26.364 26.192 25.5761 34.0708"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.4229 1.92773C9.63506 9.80658 9.63506 17.6641 10.4229 25.5429C18.3018 26.3308 26.1587 26.3308 34.0376 25.5429"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              크롭 영역 추천
            </dt>
            <dd className="text-xs text-gray-600">
              영상 편집이 수월하도록 얼굴 위치를 자동으로 감지하여 크롭해줍니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"></path>
                  <path
                    d="M10.5751 29.1144H9V14.4022H10.5751L17.1873 2.92908C17.5443 2.30952 18.205 1.92773 18.9201 1.92773H21.0595C22.2742 1.92773 23.2085 3.00176 23.0402 4.20479L22.2398 9.92669H27.3582C29.5959 9.92669 34.0714 12.1644 34.0714 16.6399C34.0714 21.1154 29.5714 31.3521 24.8113 31.3521C18.5456 31.3521 13.1858 29.8603 10.5751 29.1144Z"
                    stroke="#4147D5"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1.92773 13.8209C1.92773 11.8682 3.51073 10.2852 5.46345 10.2852C7.41617 10.2852 8.99916 11.8681 8.99916 13.8209V28.6066C8.99916 30.5593 7.41617 32.1423 5.46345 32.1423C3.51073 32.1423 1.92773 30.5593 1.92773 28.6066V13.8209Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              유튜브 댓글 캡쳐
            </dt>
            <dd className="text-xs text-gray-600">
              ‘좋아요’ 반응이 많은 센스있는 댓글들을 편하게 쇼츠 영상 안에
              불러와 보여줄 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-[#4147D5]"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="4"
                    fill="#D7DFFF"
                    stroke="#4147D5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                  <path d="M9 24.5468H11.8067V20.131H14.2391C17.3638 20.131 19.1601 18.2692 19.1601 15.5655C19.1601 12.8992 17.3919 11 14.3139 11H9V24.5468ZM11.8067 17.8669V13.3015H13.79C15.4553 13.3108 16.2692 14.2183 16.2599 15.5655C16.2692 16.9314 15.4553 17.8669 13.79 17.8669H11.8067Z"></path>
                  <path d="M20.8815 24.5468H23.6507V18.7651C23.6414 17.5208 24.5676 16.6507 25.8212 16.6507C26.2048 16.6507 26.738 16.7162 27 16.8004V14.3306C26.7568 14.2744 26.4012 14.237 26.1206 14.237C24.9792 14.237 24.0343 14.9012 23.6694 16.1455H23.5572V14.3867H20.8815V24.5468Z"></path>
                </svg>
              </div>
              레거시 텍스트 효과 지원
            </dt>
            <dd className="text-xs text-gray-600">
              다양한 자막과 핫한 화면 꾸미기 효과들이 계속 업데이트 될 거예요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"></path>
                  <path
                    d="M9.32259 4.83746C11.3189 3.63576 13.6022 3.00073 15.9292 3C17.8653 2.99885 19.7767 3.43689 21.5209 4.28145C23.2652 5.12601 24.7972 6.35532 26.0028 7.87773C27.2085 9.40015 28.0566 11.1764 28.4841 13.0741C28.9115 14.9718 28.9073 16.942 28.4716 18.8377C28.0359 20.7335 27.18 22.5061 25.9678 24.0232C24.7555 25.5403 23.2182 26.7629 21.4703 27.5998C19.7225 28.4367 17.8092 28.8663 15.8731 28.8567C14.2572 28.8487 12.6602 28.5348 11.1648 27.9345L3.22011 29.264C2.84833 29.3262 2.54403 28.9703 2.66325 28.6127L4.75727 22.3317C3.75529 20.5655 3.17979 18.5828 3.08311 16.5437C2.97236 14.2078 3.49415 11.8854 4.59292 9.82398C5.69169 7.76251 7.32628 6.03915 9.32259 4.83746Z"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M28.4099 14.5793C26.9127 13.678 25.2002 13.2017 23.4549 13.2012C22.0028 13.2003 20.5693 13.5288 19.2611 14.1623C17.953 14.7957 16.804 15.7177 15.8997 16.8595C14.9955 18.0013 14.3594 19.3335 14.0388 20.7567C13.7182 22.18 13.7214 23.6576 14.0482 25.0795C14.3749 26.5013 15.0168 27.8307 15.926 28.9686C16.8352 30.1064 17.9882 31.0233 19.2991 31.651C20.61 32.2787 22.045 32.6009 23.497 32.5937C24.709 32.5877 25.9067 32.3523 27.0282 31.9021L32.9868 32.8991C33.2656 32.9458 33.4938 32.6789 33.4044 32.4107L31.8339 27.6999C32.5854 26.3753 33.017 24.8883 33.0895 23.359C33.1726 21.607 32.7812 19.8653 31.9572 18.3192C31.1331 16.7731 29.9071 15.4805 28.4099 14.5793Z"
                    fill="#D7E0FF"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              화자별 자막 구분
            </dt>
            <dd className="text-xs text-gray-600">
              누가 말했는지 음성을 구분하고 말한 사람에 따라 자막을 다르게
              연출할 수 있습니다.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8574 15.1445L4.00084 32.0011"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M13.5566 7.84766L16.181 10.472"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M20.2324 4L20.9748 7.63641"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M29.6211 6.38086L26.9967 9.00523"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M28.1543 22.4453L25.5299 19.8209"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M32 15.7676L28.3636 15.0252"
                    stroke="#4845E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              AI 제목 추천 기능
            </dt>
            <dd className="text-xs text-gray-600">
              조회수에 중요한 역할을 하는 숏폼 제목, AI가 영상에 맞춰 매력적인
              제목으로 추천해 드려요.
            </dd>
          </div>
          <div
            className="flex flex-none flex-col gap-2 rounded-3xl bg-white px-8 pt-10"
            style={{ width: '393px', height: '220px' }}
          >
            <dt className="text-lg font-semibold text-gray-900">
              <div className="mb-4">
                <svg
                  className="fill-none"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50044 28.089C9.63983 29.9919 11.0841 31.5657 12.9841 31.7407C16.7398 32.0865 20.2602 32.0865 24.0159 31.7407C25.9159 31.5657 27.3602 29.9919 27.4996 28.089C27.7375 24.8412 28 21.465 28 18C28 14.535 27.7375 11.1588 27.4996 7.91101C27.3602 6.0081 25.9159 4.43428 24.0159 4.25935C20.2602 3.91355 16.7398 3.91355 12.9841 4.25935C11.0841 4.43428 9.63983 6.0081 9.50043 7.91101C9.26252 11.1588 9 14.535 9 18C9 21.465 9.26252 24.8412 9.50044 28.089Z"
                    fill="#D7E0FF"
                    stroke="#4147D5"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M16.7988 5.70117H20.2116"
                    stroke="#4147D5"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              AICO 모바일 앱 출시
            </dt>
            <dd className="text-xs text-gray-600">
              핸드폰에 저장된 수많은 세로형 영상들도 PC버전과 쉽게 연동할 수
              있어요.
            </dd>
          </div>
        </div>
      </div>
    </section>
  );
}
