import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Principal } from './layout';
import './App.scss';

const App: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const ballRef = useRef<HTMLDivElement>(null);

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ballRef.current) {
        const { width, height } = ballRef.current.getBoundingClientRect();
        setPosition({ x: event.clientX - width / 2, y: event.clientY - height / 2 });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="glow-container">
        <div
          className="ball"
          ref={ballRef}
          style={{
            transform: `translate3D(${position.x}px, ${position.y}px, 0)`
          }}
        >
          <div className="shadow"></div>
        </div>
      </div>
      <div className='content-page'>
        <Principal />
      </div>
      <div className='language-container'>
        <div className={`selector-language ${i18n.language}`}/>
        <div className='buttons'>
          <button className={`${i18n.language=='en'? 'active': ''}`} onClick={() => changeLanguage('en')}>
            <span>EN</span>
          </button>
          <button className={`${i18n.language=='es'? 'active': ''}`} onClick={() => changeLanguage('es')}>
            <span>ES</span>
          </button>
          <button className={`${i18n.language=='fr'? 'active': ''}`} onClick={() => changeLanguage('fr')}>
            <span>FR</span>
          </button>
          <button className={`${i18n.language=='zh'? 'active': ''}`} onClick={() => changeLanguage('zh')}>
            <span>ZH</span>
          </button>
        </div>
        
      </div>
    </>
  );
};

export default App;
