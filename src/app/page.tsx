import Footer from '@/components/Footer';
import FourSection from '@/components/FourSection';
import BackgroundIcon from '@/components/Main/BackgroundIcon';
import Header from '@/components/Main/Header';
import VideoSection from '@/components/Main/VideoSection';
import SearchSection from '@/components/SearchSection';
import ShortSection from '@/components/ShotrSection';
import SlideSection from '@/components/SlideSection';
import Image from 'next/image';
import chatBtn from '../../public/chatBtn.png';

export default function Home() {
  return (
    <div>
      <div
        className="relative pb-10"
        style={{
          background: `radial-gradient(62.21% 62.21% at 50% 83.95%, rgba(229, 196, 255, 0.5) 0, rgba(247, 248, 253, 0.5) 100%), linear-gradient(0deg, #f7f8fd, #f7f8fd)`,
        }}
      >
        <BackgroundIcon />
        <Header />
        <VideoSection />
      </div>
      <ShortSection />
      <SearchSection />
      <SlideSection />
      <FourSection />
      <Footer />
      <div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <Image
          className="cursor-pointer"
          src={chatBtn}
          width={75}
          height={75}
          alt="ChatBtn"
        />
      </div>
    </div>
  );
}
