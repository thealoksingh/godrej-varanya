import React from 'react';
import SEO from '../components/SEO';
import About from '../components/About';

const AboutPage = ({onRequestCallBack}) => {
  return (
    <>
      <About onRequestCallBack={onRequestCallBack}/>
    </>
  );
};

export default AboutPage;