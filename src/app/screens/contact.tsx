import React from 'react';

const Contact: React.FC = () => {
  const socialLinks = [
    { href: 'https://www.facebook.com/share/SrGTQr92VnYbDmvN/?mibextid=qi2Omg', label: 'Facebook' },
    { href: 'https://www.instagram.com/justsantg?igsh=MTBvM3l4bjlvamRwaA==', label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/santiago-rs-77198b288/', label: 'Linkedin' },
  ];
  

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-md p-4" style={{ background: '#8F5F3F' }}>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Contactame</h2>
          <p className="text-white mb-4">¡Hola! Si quieres contactarme o tienes alguna pregunta, no dudes en hacerlo.</p>
          <div className="flex flex-col items-center justify-center">
            <ContactDetail label="Correo electrónico:" value={'santiago.reyess1809@gmail.com'} />
            <ContactDetail label="Teléfono:" value="+57 3003719503" />
            <div className="flex flex-row items-center mt-4 gap-5">
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
  const handleEmailClick = () => {
    const email = 'santiago.reyess1809@gmail.com'; // Replace with the provided email address
    window.open(`mailto:${email}`, '_blank'); // Open in new tab
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://web.whatsapp.com/send?phone=+573003719503'+value; // Replace with the provided WhatsApp link

    window.open.location.href = whatsappUrl ,'_blank'; // Open WhatsApp Web for all devices
  };

  return (
    <div className="flex flex-col items-start mb-4">
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold">{label}</span>
        {href ? (
          <a href={href} className="text-white mt-1 hover:text-gray-700" onClick={handleEmailClick}>
            {value}
          </a>
        ) : (
          <span className="text-white mt-1 hover:text-gray-700" onClick={handleWhatsAppClick}>
            {value}
          </span>
        )}
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


