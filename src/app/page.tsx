import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image
        width={100}
        height={100}
        src={'https://aico.tv/images/logo/aico_event_logo.svg'}
        alt="logo"
      ></Image>
    </div>
  );
}
