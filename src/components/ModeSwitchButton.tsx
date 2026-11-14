import styled from 'styled-components';
import { FiRefreshCw } from 'react-icons/fi';

interface ModeSwitchButtonProps {
  isSilly: boolean;
  onToggle: () => void;
}

const FloatingSwitch = styled.button<{ $isSilly: boolean }>`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme, $isSilly }) =>
    $isSilly ? theme.fonts.chaotic : theme.fonts.mono};
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  border-radius: ${({ $isSilly }) => ($isSilly ? '0px' : '6px')};
  background-color: ${({ theme, $isSilly }) =>
    $isSilly ? '#FFFF00' : theme.colors.gray.dark};
  color: ${({ theme, $isSilly }) =>
    $isSilly ? '#FF0000' : theme.colors.white};
  border: ${({ theme, $isSilly }) =>
    $isSilly ? '3px solid #0000FF' : `1px solid ${theme.colors.gray.medium}`};
  font-weight: 700;
`;

export function ModeSwitchButton({ isSilly, onToggle }: ModeSwitchButtonProps) {
  return (
    <FloatingSwitch $isSilly={isSilly} onClick={onToggle}>
      <FiRefreshCw />
      <span>Tecla [M]: {isSilly ? 'Modo Silly' : 'Modo Craft'}</span>
    </FloatingSwitch>
  );
}