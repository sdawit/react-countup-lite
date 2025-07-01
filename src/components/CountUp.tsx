import * as React from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { getSuffix, defaultFormat } from '../utils/format';

export type CountUpProps = {
  start?: number;
  end: number;
  duration?: number; // in seconds
  delay?: number; // in seconds
  decimals?: number;
  format?: (_value: number) => string; // custom formatting function
  suffix?: string; // e.g., 'k', 'M'
  easingFn?: (_t: number) => number; // optional easing function
  playOnView?: boolean; // animate when in viewport
  className?: string;
  style?: React.CSSProperties;
};

export const CountUp: React.FC<CountUpProps> = (props) => {
  const { value, ref } = useCountUp(props);
  const [displayValue, displaySuffix] = getSuffix(value, props.suffix);
  const formatted = props.format
    ? props.format(displayValue)
    : defaultFormat(displayValue, props.decimals, displaySuffix);

  return (
    <span ref={ref} className={props.className} style={props.style}>
      {formatted}
    </span>
  );
};
