import { useState, useEffect, useCallback } from 'react';
import { introSlideData } from '../content/slidesData';
import { handlePresenterKeyDown } from '../utils/navigationHelper';
import { ModeSwitchButton } from '../components/ModeSwitchButton';
import { SillyIntroMode } from './modes/SillyIntroMode';
import { CraftIntroMode } from './modes/CraftIntroMode';

export function IntroSlide() {
  const [isSilly, setIsSilly] = useState(true);

  const toggleMode = useCallback(() => {
    setIsSilly((prev) => !prev);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) =>
      handlePresenterKeyDown(event, toggleMode);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [toggleMode]);

  return (
    <>
      <ModeSwitchButton isSilly={isSilly} onToggle={toggleMode} />
      {isSilly ? (
        <SillyIntroMode content={introSlideData} />
      ) : (
        <CraftIntroMode content={introSlideData} onStartClick={toggleMode} />
      )}
    </>
  );
}