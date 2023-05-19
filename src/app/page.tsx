import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex items-center justify-center px-0 py-16">
        <Image
          className="logo"
          src="/kraftend.svg"
          alt="Kraftend Logo"
          width={585}
          height={91}
          priority
        />
      </div>
    </main>
  );
}
