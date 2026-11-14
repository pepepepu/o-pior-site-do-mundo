import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { calculateTimeRemaining } from '../utils/countdownHelper';

interface CountdownTimerProps {
  targetDateISO: string;
  prefix: string;
}

const CountdownBox = styled.div`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #0000ff, #ff0000, #00ff00);
  border: 4px dotted #ffff00;
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.chaotic};
  font-size: 1.6rem;
  font-weight: 700;
  text-shadow: 2px 2px 0px #000000;
  box-shadow: 8px 8px 0px #000000;
  transform: skewX(-6deg);
`;

export function CountdownTimer({ targetDateISO, prefix }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeRemaining(targetDateISO)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(targetDateISO));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateISO]);

  return (
    <CountdownBox>
      {prefix} {timeLeft.formatted}
    </CountdownBox>
  );
}