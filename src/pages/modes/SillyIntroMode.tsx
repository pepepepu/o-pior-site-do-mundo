import { useRef } from 'react';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import type { IntroSlideContent } from '../../content/slidesData';
import { animate3DSpinningText } from '../../animations/slideAnimations';
import { CountdownTimer } from '../../components/CountdownTimer';
import { UglyTagList } from '../../components/UglyTagList';

interface SillyIntroModeProps {
  content: IntroSlideContent;
}

const SillyWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: ${({ theme }) => theme.fonts.chaotic};
  background: linear-gradient(
    135deg,
    #ff00ff 0%,
    #00ffff 25%,
    #ffff00 50%,
    #ff0000 75%,
    #00ff00 100%
  );
  perspective: 1200px;
  overflow: hidden;
  text-align: center;
`;

const SmallPresenterText = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #0000ff;
  background-color: #ffffff;
  padding: 0.15rem 0.4rem;
  border: 2px solid #ff0000;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
`;

const Stage3D = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  margin: 1.5rem 0;
`;

const Giant3DTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.chaotic};
  font-size: clamp(3rem, 7vw, 6.2rem);
  font-weight: 700;
  color: #ffff00;
  text-transform: uppercase;
  line-height: 1.05;
  transform-style: preserve-3d;
  text-shadow:
    1px 1px 0 #ff0000,
    2px 2px 0 #ff0000,
    3px 3px 0 #ff0000,
    4px 4px 0 #cc0000,
    5px 5px 0 #cc0000,
    6px 6px 0 #990000,
    7px 7px 0 #990000,
    8px 8px 0 #0000ff,
    9px 9px 0 #0000ff,
    10px 10px 0 #0000ff,
    12px 12px 20px rgba(0, 0, 0, 0.85);
`;

export function SillyIntroMode({ content }: SillyIntroModeProps) {
  const spinningTextRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    animate3DSpinningText(spinningTextRef.current);
  });

  return (
    <SillyWrapper>
      <SmallPresenterText>
        {content.silly.smallPresenterText}
      </SmallPresenterText>

      <Stage3D>
        <Giant3DTitle ref={spinningTextRef}>
          {content.silly.giant3DText}
        </Giant3DTitle>
      </Stage3D>

      <CountdownTimer
        targetDateISO={content.targetDateISO}
        prefix={content.silly.countdownPrefix}
      />

      <UglyTagList tags={content.silly.tags} />
    </SillyWrapper>
  );
}