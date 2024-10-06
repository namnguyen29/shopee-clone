import { computePosition } from '@floating-ui/react';
import { useEffect, useRef } from 'react';

const TooltipExample = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    computePosition(buttonRef.current as HTMLElement, tooltipRef.current as HTMLElement, {
      placement: 'right'
    }).then(({ x, y }) => {
      console.log(x, y);
      if (tooltipRef.current) {
        tooltipRef.current.style.left = `${x}px`;
      }
      if (buttonRef.current) {
        buttonRef.current.style.left = `${y}px`;
      }
    });
  }, []);

  return (
    <button ref={buttonRef} id="button" className="relative">
      My button
      <div ref={tooltipRef} id="tooltip" role="tooltip" className="absolute left-5 top-5">
        My tooltip
      </div>
    </button>
  );
};

export const Home = () => {
  return (
    <article>
      <div className="h-[600px]"></div>
      <TooltipExample />
    </article>
  );
};
