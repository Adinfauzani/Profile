import { useCallback, useRef, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface UseMousePositionReturn {
  ref: React.RefObject<HTMLElement>;
  position: MousePosition;
  isHovered: boolean;
}

export function useMousePosition(): UseMousePositionReturn {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setPosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    ref: ref as React.RefObject<HTMLElement>,
    position,
    isHovered,
  };
}
