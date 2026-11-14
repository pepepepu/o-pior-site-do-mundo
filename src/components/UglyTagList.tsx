import styled from 'styled-components';
import type { SillyTag } from '../content/slidesData';

interface UglyTagListProps {
  tags: SillyTag[];
}

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  margin-top: 2.5rem;
`;

const UglyBadge = styled.span<{
  $bg: string;
  $color: string;
  $border: string;
  $rotation: string;
}>`
  font-family: ${({ theme }) => theme.fonts.chaotic};
  font-size: 1.15rem;
  font-weight: 700;
  padding: 0.5rem 1.1rem;
  background-color: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  border: ${({ $border }) => $border};
  transform: rotate(${({ $rotation }) => $rotation});
  box-shadow: 5px 5px 0px #000000;
  text-transform: uppercase;
`;

export function UglyTagList({ tags }: UglyTagListProps) {
  return (
    <TagContainer>
      {tags.map((tag) => (
        <UglyBadge
          key={tag.id}
          $bg={tag.bgColor}
          $color={tag.textColor}
          $border={tag.borderStyle}
          $rotation={tag.rotation}
        >
          {tag.label}
        </UglyBadge>
      ))}
    </TagContainer>
  );
}