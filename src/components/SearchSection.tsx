'use client';
import { useState } from 'react';

export default function SearchSection() {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <section className="relative bg-achromatic">
      <div className="absolute left-0 right-0 top-0 h-28 bg-[#1B1A24]"></div>
      <div className="relative mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-md bg-[#39B54A] shadow-xl sm:rounded-3xl">
          <div className="flex items-center justify-center px-6 py-8 sm:px-10 sm:py-16 md:px-12 lg:px-20">
            <div className="absolute z-0 h-full w-full overflow-hidden">
              <div className="absolute h-full w-full overflow-hidden object-scale-down">
                <svg
                  width="1400"
                  height="270"
                  viewBox="0 0 1400 270"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1048.36 216.087C1042.11 221.433 1033.66 224.233 1024.44 222.833C1012.58 221.051 1002.65 211.886 1000.2 200.303C996.198 181.401 1010.71 164.789 1029.15 164.789C1036.63 164.789 1043.4 167.526 1048.55 172.045C1052.74 175.673 1059 175.864 1063.77 173L1131.34 132.013C1137.98 128.003 1139.4 119.22 1134.63 113.174C1109.36 81.0338 1069.51 60.6677 1024.76 62.0679C956.157 64.2318 899.223 119.093 895.548 186.747C891.422 262.929 952.804 326 1029.08 326C1072.28 326 1110.52 305.761 1134.95 274.385C1139.53 268.466 1137.73 259.874 1131.28 255.991L1062.93 214.559C1058.29 211.695 1052.42 212.586 1048.3 216.15L1048.36 216.087Z"
                    fill="white"
                    fillOpacity="0.1"
                  ></path>
                  <path
                    d="M1272.82 62C1198.05 62 1137.5 121.126 1137.5 194C1137.5 266.874 1198.11 326 1272.82 326C1347.53 326 1408.14 266.874 1408.14 194C1408.14 121.126 1347.59 62 1272.82 62ZM1272.82 223.213C1256.25 223.213 1242.87 210.102 1242.87 194C1242.87 177.898 1256.31 164.787 1272.82 164.787C1289.33 164.787 1302.77 177.898 1302.77 194C1302.77 210.102 1289.33 223.213 1272.82 223.213Z"
                    fill="white"
                    fillOpacity="0.1"
                  ></path>
                  <path
                    d="M334.924 -51H246.039C238.835 -51 232.996 -45.3478 232.996 -38.3754V183.375C232.996 190.348 238.835 196 246.039 196H334.924C342.128 196 347.967 190.348 347.967 183.375V-38.3754C347.967 -45.3478 342.128 -51 334.924 -51Z"
                    fill="white"
                    fillOpacity="0.1"
                  ></path>
                  <path
                    d="M77.3266 -61C6.53376 -61 -50.8711 -5.13872 -50.8711 63.7505V183.989C-50.8711 190.662 -45.32 196 -38.5281 196H45.7833C52.6405 196 58.1263 190.598 58.1263 183.989V165.305H96.5921V183.989C96.5921 190.662 102.143 196 108.935 196H193.181C200.038 196 205.524 190.598 205.524 183.989V63.7505C205.59 -5.13872 148.185 -61 77.3266 -61ZM77.3266 96.8605C61.6529 96.8605 48.918 84.4681 48.918 69.2159C48.918 53.9637 61.6529 41.5712 77.3266 41.5712C93.0002 41.5712 105.735 53.9637 105.735 69.2159C105.735 84.4681 93.0002 96.8605 77.3266 96.8605Z"
                    fill="white"
                    fillOpacity="0.1"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex w-full max-w-2xl flex-col items-center justify-center lg:mx-0">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                내 유튜브 영상
              </h2>
              <form>
                <div className="flex items-center justify-center gap-3">
                  <label htmlFor="YoutubeSearch">
                    <div className="relative flex h-14 items-center rounded-full border bg-searchbg pl-[60px] pr-5 duration-150 focus-within:border-primary100 focus-within:transition-colors lg:w-[29.375rem]">
                      <svg
                        className="absolute left-6 h-6 w-6 fill-[#FF0000]"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1296_26291)">
                          <path d="M23.499 6.58682C23.2139 5.57476 22.4247 4.78101 21.4081 4.50043C19.5363 4.00002 12.0115 4.00002 12.0115 4.00002C12.0115 4.00002 4.50091 3.98802 2.60958 4.50043C1.59827 4.78176 0.805274 5.57476 0.523187 6.58682C0.168328 8.50516 -0.0079757 10.4468 0.000276829 12.3974C-0.00347432 14.3352 0.17208 16.2738 0.523187 18.1801C0.805274 19.1922 1.59827 19.9859 2.60958 20.271C4.4814 20.7714 12.0115 20.7714 12.0115 20.7714C12.0115 20.7714 19.5175 20.7714 21.4081 20.271C22.4247 19.9859 23.2139 19.1929 23.499 18.1801C23.8433 16.2738 24.0114 14.3352 23.9994 12.3974C24.0114 10.4468 23.8471 8.50516 23.499 6.58682V6.58682ZM9.60772 15.9887V8.79024L15.8714 12.3974L9.60772 15.9887Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1296_26291">
                            <rect width="24" height="24"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <input
                        id="YoutubeSearch"
                        type="text"
                        className="peer w-full border-none bg-inherit text-base caret-primary-100 ring-offset-0 placeholder:text-base placeholder:text-gray-400 focus:outline-none focus:ring-offset-0"
                        placeholder="유튜브 제목, 유튜버 혹은 링크로 검색하기"
                        autoComplete="off"
                        required
                        name="query"
                        value={query}
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                  <button
                    disabled
                    type="submit"
                    className={`z-10 h-14 items-center justify-center gap-1 rounded-full bg-secondary px-8 py-4 font-bold text-white ${
                      query ? '' : 'cursor-not-allowed'
                    }`}
                  >
                    검색하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
