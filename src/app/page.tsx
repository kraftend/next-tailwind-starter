import Logo from '~/assets/kraftend.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex items-center justify-center px-0 py-16">
        <Logo />
      </div>
    </main>
  );
}
