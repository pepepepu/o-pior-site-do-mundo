import styled from 'styled-components';
import { FiCheckCircle, FiAlertTriangle, FiInfo, FiXCircle } from 'react-icons/fi';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

interface ToastPreviewProps {
  variant: ToastVariant;
  message: string;
}

const ToastWrapper = styled.div<{ $variant: ToastVariant }>`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  border-left: 4px solid ${({ theme, $variant }) => theme.colors.toast[$variant]};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.85rem;
`;

const IconContainer = styled.span<{ $variant: ToastVariant }>`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${({ theme, $variant }) => theme.colors.toast[$variant]};
`;

export function ToastPreview({ variant, message }: ToastPreviewProps) {
  const renderIcon = () => {
    switch (variant) {
      case 'success':
        return <FiCheckCircle />;
      case 'error':
        return <FiXCircle />;
      case 'warning':
        return <FiAlertTriangle />;
      case 'info':
        return <FiInfo />;
    }
  };

  return (
    <ToastWrapper $variant={variant}>
      <IconContainer $variant={variant}>{renderIcon()}</IconContainer>
      <span>{message}</span>
    </ToastWrapper>
  );
}