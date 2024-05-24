import React from 'react';

const Contact: React.FC = () => {
  const socialLinks = [
    { href: 'https://www.facebook.com/tuperfil', label: 'Facebook' },
    { href: 'https://www.instagram.com/tuperfil', label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/santiago-rs-77198b288/', label: 'Linkedin' },
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-md p-4" style={{background:'#8F5F3F'}}>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Contactame</h2>
          <p className="text-white mb-4">¡Hola! Si quieres contactarme o tienes alguna pregunta, no dudes en hacerlo.</p>
          <div className="flex flex-col items-center items-center">
            <ContactDetail label="Correo electrónico:" value={'santiago.reyess1809@gmail.com'} />
            <ContactDetail label="Teléfono:" value="+57 3003719503" />
            <div className="flex flex-col items-center mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  
                  className="text-white hover:text-gray-700"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ContactDetail: React.FC<ContactDetailProps> = ({ label, href, value }) => {
    return (
      <div className="flex flex-col items-start mb-4">
        <div className="flex items-center">
          
          <div className="flex flex-col">
            <span className="text-lg font-medium">{label}</span>
            {href ? (
              <a href={href} className="text-white mt-1">{value}</a>
            ) : (
              <span className="text-white mt-1 ">{value}</span>
            )}
          </div>
        </div>
      </div>
    );
  };

interface ContactDetailProps {
  label: string;
  href?: string;
  value: string;
}



export default Contact;