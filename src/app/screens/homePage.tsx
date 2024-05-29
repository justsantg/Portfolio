import { useTranslation } from 'react-i18next';


const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center min-h-screen text-center"> 
      <div className="flex flex-col items-center w-full max-w-2xl px-4 py-8">
        <div className="flex flex-row-reverse items-center">
          <div className="flex flex-col items-center w-1/2">
            <div className="profilePic w-full h-full rounded-3xl ml-8 mb-8" />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-center mb-4">{t('welcomePort')}</h1>
            <p className="text-xl text-justify  align-middle mb-4 ">{t('description')}</p>

            <section className="text-center">
              <h2 className="text-xl font-bold align-middle mb-4">{t('contactMe')}:</h2>
              <p>
                <a href="santiago.reyess1809@gmail.com" className="text-blue-500 hover:text-blue-700 align-middle">{t('email')}</a>
                <a href="https://www.linkedin.com/in/santiago-rs-77198b288/" className="text-blue-500 hover:text-blue-700 ml-4 align-middle">LinkedIn</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


