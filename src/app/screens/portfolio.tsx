import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Portfolio = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <section id="portafolio" className="container mx-auto px-4 py-8">
      <h2 className="flex flex-col items-center text-3xl font-bold mb-8">{t('portfolio')}</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <Carousel className="carousel items-center mx-auto max-w-md">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img
                width={350}
                height={250}
                className="project1 rounded-lg shadow-md mb-4"
              />
              <h3 className=" flex flex-col items-centertext-xl font-bold mb-2">{t('apiGranja')}</h3>
              <p className=" flex flex-col items-center text-gray-600 mb-4">{t('description1')}</p>
              <a href="https://github.com/SantiagoReyes1809/GranjaEle2.git" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md  transition-colors" style={{background: '#734935'}}>
                {t('seeMore')}</a>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img
                width={350}
                height={250}
                className="project2 rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{t('apiParque')}</h3>
              <p className="text-gray-600 mb-4">
                {t('description2')}
              </p>
              <a href="http://127.0.0.1:8000/parqueaderos/" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition-colors" style={{background: '#734935'}}>
              {t('seeMore')}
              </a>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img
                width={350}
                height={250}
                className="project3 rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{t('apiConver')}</h3>
              <p className="text-gray-600 mb-4">
                {t('description3')}
              </p>
              <a href="https://github.com/SantiagoReyes1809/ConversionModista.git" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition-colors" style={{background: '#734935'}}>
              {t('seeMore')}
              </a>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img
                width={350}
                height={250}
                className="project4 rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{t('ApiMoneda')}</h3>
              <p className="text-gray-600 mb-4">
                {t('description4')}
              </p>
              <a href="https://github.com/SantiagoReyes1809/ImportacionDolar.git" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition-colors" style={{background: '#734935'}}>
              {t('seeMore')}
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;