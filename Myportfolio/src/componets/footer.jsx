import React, { useEffect, useState } from 'react';
import SocialNetworks from './SocialNetworks';
import Information from './information';

const Footer = (props) => {
  const [footerColor, setFooterColor] = useState('transparent'); // Color inicial del footer
  const [information, setInfomation] = useState(false)

 

  return (
    <>
      <section className={`footer d-flex justify-content-center bg-black`} style={{height: 'auto', paddingBlockStart:'10px'}}>
      <div className="" style={{ backgroundColor: footerColor }}>
          <Information />
          <SocialNetworks fill='white' height='50px'/>
      </div>
      </section>
    </>
  );
};

export default Footer;
//footer d-flex justify-content-center NotMove