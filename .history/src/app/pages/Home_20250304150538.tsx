import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Bienvenido a mi Portafolio</h2>
        <p className="mt-4 text-gray-700 text-lg">Soy un estudiante de ingenieria de software, actualmente en 7mo semestre, me apasiona mucho la tecnologia y las novedades, bienvenido a mi portafolio.</p>
        <img alt="Imagen de bienvenida" className="mt-8 mx-auto rounded-lg shadow-lg" height="400" src="https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22WhatsApp%20Image%202025-02-06%20at%207.31.17%20PM.jpeg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-03-03T20%3A04%3A25.915Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2F5f7a08c5c552406b%2FWhatsApp%2520Image%25202025-02-06%2520at%25207.31.17%2520PM.jpeg%3FExpires%3D1835726666%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DQ1q5fpiyjIEG6Ijfdw1uzYEWkEw-JyzZ3fiteGJphnFnBEtVMqDIDTJh2uVK8eVhqBiPesYwuiY89UdBMKWQqgvtlMh3gqwYKJrB5jkfrgQY93q5~EVMnLuyN9gcp4RCj~XWBf4RrXVs2u~GWGUZpyBKd5nRvq2h3HhB1V9hHvVxdQ18R19DmbKf8fRG56noLY~AMi343sRz744YPHuvepkhsMYrzZrONpulziPAlz6yqx40JP6D8aW92Eow1guVwAdbRp5OuxFg~INvF0SRRsqJdV0xUOmcTY-BI69cjYiBGDd5oeRVUhrGXC6CCN1uyJFbOXN4GQVioAai4JWmiQ__%22%7D" width="600"/>

        <div className="mt-8 flex justify-center space-x-4">
          <a href="https://github.com/justsantg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-gray-700 text-2xl hover:text-gray-900" />
          </a>
          <a href="https://www.linkedin.com/in/santiago-reyes-8a90b1350/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-700 text-2xl hover:text-gray-900" />
          </a>
          <a href="https://www.instagram.com/justsantg/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-gray-700 text-2xl hover:text-gray-900" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;