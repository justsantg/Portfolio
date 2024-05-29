import React from 'react';
import { useTranslation } from 'react-i18next';
import { t } from "i18next";

const AboutMe = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <section id="sobre-mi" className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">{t('aboutMe')}</h2>
          <p className="text-xl mb-4">{t('aboutMe1')}</p>
          <p className="text-xl mb-4">{t('aboutMe2')}</p>
          <div className="flex justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/1QETDDSSWN7oV_E9hq-_aInkwJCBVH4C8/view?usp=sharing"
            className="text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            style={{ background: '#734935' }}
            target="_blank" 
          >
            {t('downCV')}
          </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-48 h-48 rounded-xl mb-4 profilePic2"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Santiago Reyes Sánchez</p>
            <p className="text-base">Estudiante de Ingeniería de Software</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutMe;