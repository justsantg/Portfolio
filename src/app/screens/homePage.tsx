import { useTranslation } from 'react-i18next';
import { t } from "i18next";
import React from 'react';


const HomePage = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <img
        className="w-40 h-40 rounded-3xl mx-auto mb-8 profilePic"
      />
      <h1 className="text-3xl font-bold text-center mb-4">{t('welcomePort')}</h1>
      <p className="text-xl text-justify  align-middle mb-4 ">{t('description')}</p>

      <section className="text-center">
        <h2 className="text-xl font-bold align-middle mb-4">{t('contactMe')}:</h2>
        <p>
          <a href="santiago.reyess1809@gmail.com" className="text-blue-500 hover:text-blue-700 align-middle">{t('email')}</a>
          <a href="https://www.linkedin.com/in/santiago-rs-77198b288/" className="text-blue-500 hover:text-blue-700 ml-4 align-middle">LinkedIn</a>
        </p>
      </section>
    </div>
  );
};

export default HomePage;
