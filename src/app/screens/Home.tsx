import { t } from "i18next";

function Home() {
  return (
    <main className='flex items-center justify-center w-full h-full'>
      <p>{t('title')}</p>
    </main>
  );
}

export default Home;
