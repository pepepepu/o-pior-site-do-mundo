import { useRef } from 'react';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import { FiZap } from 'react-icons/fi';
import type { IntroSlideContent } from '../../content/slidesData';
import { animateSlideEntry } from '../../animations/slideAnimations';

interface CraftIntroModeProps {
  content: IntroSlideContent;
  onStartClick: () => void;
}

const CraftWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 6rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
`;

const ContentSection = styled.section`
  max-width: 980px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Badge = styled.span`
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  color: ${({ theme }) => theme.colors.brand.primaryLight};
  border: 1px solid ${({ theme }) => theme.colors.brand.primaryDark};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 4.5rem;
  line-height: 1.08;
  letter-spacing: -0.03em;
`;

const SerifHighlight = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-weight: 400;
  font-size: 5.5rem;
  color: ${({ theme }) => theme.colors.brand.primaryLight};
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 680px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray.light};
`;

const ActionButton = styled.button`
  align-self: flex-start;
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.primaryDark};
    transform: translateY(-2px);
  }
`;

export function CraftIntroMode({ content, onStartClick }: CraftIntroModeProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      animateSlideEntry(containerRef.current);
    },
    { scope: containerRef }
  );

  return (
    <CraftWrapper ref={containerRef}>
      <ContentSection>
        <Badge data-animate>{content.craft.badge}</Badge>
        <Title data-animate>
          {content.craft.title}
          <SerifHighlight>{content.craft.highlight}</SerifHighlight>
        </Title>
        <Subtitle data-animate>{content.craft.subtitle}</Subtitle>
        <ActionButton data-animate onClick={onStartClick}>
          <FiZap />
          <span>{content.craft.buttonText}</span>
        </ActionButton>
      </ContentSection>
    </CraftWrapper>
  );
}