import { NextPage } from 'next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HomeCard } from '@/components/HomeCard';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-8 text-center md:px-20">
        <Header />

        <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
          <HomeCard highlight title="Documentation" href="https://nextjs.org/docs">
            Find in-depth information about Next.js features and API.
          </HomeCard>

          <HomeCard title="Learn" href="https://nextjs.org/learn">
            Learn about Next.js in an interactive course with quizzes!
          </HomeCard>

          <HomeCard title="Examples" href="https://github.com/vercel/next.js/tree/canary/examples">
            Discover and deploy boilerplate example Next.js projects.
          </HomeCard>

          <HomeCard
            title="Deploy"
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            Instantly deploy your Next.js site to a public URL with Vercel.
          </HomeCard>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
