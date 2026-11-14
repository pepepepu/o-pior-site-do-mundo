import { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useGSAP } from '@gsap/react';
import { FiZap, FiRefreshCw, FiTerminal } from 'react-icons/fi';
import { slidesData } from '../content/slidesData';
import { animateSlideEntry, animateModeSwitch } from '../animations/slideAnimations';
import { handlePresenterKeyDown } from '../utils/navigationHelper';
import { ToastPreview } from '../components/ToastPreview';

const SlideContainer = styled.main<{ $isHostile: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 6rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${({ $isHostile, theme }) =>
    $isHostile
      ? css`
          background-color: ${theme.colors.toast.warning};
          color: ${theme.colors.black};
          font-family: ${theme.fonts.chaotic};
        `
      : css`
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
          font-family: ${theme.fonts.sans};
        `}
`;

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Badge = styled.span<{ $isHostile: boolean }>`
  font-family: ${({ theme, $isHostile }) =>
    $isHostile ? theme.fonts.chaotic : theme.fonts.mono};
  font-size: 0.8rem;
  letter-spacing: ${({ $isHostile }) => ($isHostile ? '0px' : '0.15em')};
  padding: 0.5rem 1rem;
  border-radius: ${({ $isHostile }) => ($isHostile ? '0px' : '999px')};
  background-color: ${({ theme, $isHostile }) =>
    $isHostile ? theme.colors.toast.error : theme.colors.gray.dark};
  color: ${({ theme, $isHostile }) =>
    $isHostile ? theme.colors.white : theme.colors.brand.primaryLight};
  border: 1px solid
    ${({ theme, $isHostile }) =>
      $isHostile ? theme.colors.black : theme.colors.brand.primaryDark};
`;

const ModeButton = styled.button<{ $isHostile: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  background-color: ${({ theme, $isHostile }) =>
    $isHostile ? theme.colors.black : theme.colors.gray.dark};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray.medium};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const HeroSection = styled.section`
  max-width: 980px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1<{ $isHostile: boolean }>`
  font-family: ${({ theme, $isHostile }) =>
    $isHostile ? theme.fonts.chaotic : theme.fonts.display};
  font-size: ${({ $isHostile }) => ($isHostile ? '3.5rem' : '4.5rem')};
  line-height: 1.08;
  letter-spacing: ${({ $isHostile }) => ($isHostile ? '4px' : '-0.03em')};
  text-transform: ${({ $isHostile }) => ($isHostile ? 'uppercase' : 'none')};
`;

const SerifHighlight = styled.span<{ $isHostile: boolean }>`
  display: block;
  font-family: ${({ theme, $isHostile }) =>
    $isHostile ? theme.fonts.chaotic : theme.fonts.serif};
  font-style: ${({ $isHostile }) => ($isHostile ? 'normal' : 'italic')};
  font-weight: 400;
  font-size: ${({ $isHostile }) => ($isHostile ? '4rem' : '5.5rem')};
  color: ${({ theme, $isHostile }) =>
    $isHostile ? theme.colors.toast.error : theme.colors.brand.primaryLight};
  text-decoration: ${({ $isHostile }) => ($isHostile ? 'underline wavy' : 'none')};
`;

const Subtitle = styled.p<{ $isHostile: boolean }>`
  font-size: 1.25rem;
  max-width: 680px;
  line-height: 1.6;
  color: ${({ theme, $isHostile }) =>
    $isHostile ? theme.colors.black : theme.colors.gray.light};
`;

const ActionButton = styled.button<{ $isHostile: boolean }>`
  align-self: flex-start;
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: ${({ $isHostile }) => ($isHostile ? '0.3rem 3rem' : '1rem 2rem')};
  font-family: ${({ theme, $isHostile }) =>
    $isHostile ? theme.fonts.chaotic : theme.fonts.sans};
  font-weight: 600;
  font-size: 1rem;
  border-radius: ${({ $isHostile }) => ($isHostile ? '0px' : '10px')};
  background-color: ${({ theme, $isHostile }) =>
    $isHostile ? theme.colors.toast.info : theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme, $isHostile }) =>
      $isHostile ? theme.colors.toast.error : theme.colors.brand.primaryDark};
    transform: ${({ $isHostile }) =>
      $isHostile ? 'translate(18px, -12px) rotate(4deg)' : 'translateY(-2px)'};
  }
`;

const FooterBar = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.gray.dark};
  padding-top: 1.5rem;
`;

const ToastGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export function IntroSlide() {
  const containerRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [isHostile, setIsHostile] = useState(false);
  const content = slidesData[0];

  useGSAP(
    () => {
      animateSlideEntry(containerRef.current);
    },
    { scope: containerRef }
  );

  const toggleMode = () => {
    setIsHostile((prev) => !prev);
    animateModeSwitch(heroRef.current);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) =>
      handlePresenterKeyDown(event, toggleMode);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <SlideContainer ref={containerRef} $isHostile={isHostile}>
      <TopBar data-animate>
        <Badge $isHostile={isHostile}>{content.badge}</Badge>
        <ModeButton $isHostile={isHostile} onClick={toggleMode}>
          <FiRefreshCw />
          <span>Tecla [M]: {isHostile ? 'Modo Hostil Ativo' : 'Modo Craft UI'}</span>
        </ModeButton>
      </TopBar>

      <HeroSection ref={heroRef} data-animate>
        <Title $isHostile={isHostile}>
          {content.title}
          <SerifHighlight $isHostile={isHostile}>
            {content.highlight}
          </SerifHighlight>
        </Title>
        <Subtitle $isHostile={isHostile}>{content.subtitle}</Subtitle>
        <ActionButton $isHostile={isHostile} onClick={toggleMode}>
          {isHostile ? <FiTerminal /> : <FiZap />}
          <span>
            {isHostile ? content.hostileButtonText : content.craftedButtonText}
          </span>
        </ActionButton>
      </HeroSection>

      <FooterBar data-animate>
        <ToastGroup>
          <ToastPreview variant="success" message="60 FPS Estáveis" />
          <ToastPreview variant="info" message="5 Fontes Ativas" />
          <ToastPreview variant="warning" message="Contraste WCAG AAA" />
          <ToastPreview variant="error" message="Zero #000 / #FFF" />
        </ToastGroup>
      </FooterBar>
    </SlideContainer>
  );
}