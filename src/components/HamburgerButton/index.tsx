'use client';

import { forwardRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Skeleton from '@/components/Skeleton';

type Props = {
  height?: number;
  className?: string;
  onClick: () => void;
};

const PATH_VARIANTS = {
  OPEN: {
    d: 'M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z',
  },
  CLOSED: {
    d: 'M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z',
  },
};

export default forwardRef<HTMLButtonElement, Props>(function HamburguerButton(
  { height = 40, className, onClick }: Props,
  ref
) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <Skeleton height={height} width={height} />;

  const handleClick = () => {
    controls.start(isOpen ? PATH_VARIANTS.CLOSED : PATH_VARIANTS.OPEN);
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <button
      ref={ref}
      type='button'
      onClick={handleClick}
      title='Open hamburger menu'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height={height}
        viewBox='0 0 512 512'
        className={className}
      >
        <motion.path
          {...PATH_VARIANTS.CLOSED}
          animate={controls}
          transition={{ duration: 0.1 }}
        />
      </svg>
    </button>
  );
});
