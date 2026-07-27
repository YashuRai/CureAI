'use client';

import * as React from 'react';

export interface SliderProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="range"
      className={`w-full h-2 rounded-full bg-neutral-200 cursor-pointer appearance-none ${className}`}
      {...props}
    />
  )
);
Slider.displayName = 'Slider';

export { Slider };
