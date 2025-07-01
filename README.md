# React CountUp Lite

A lightweight, performant React component for animated counting with smooth easing functions and customizable formatting.

## Features

- 🚀 **Lightweight**: Minimal bundle size with zero dependencies
- ⚡ **Performant**: Uses `requestAnimationFrame` for smooth animations
- 🎨 **Customizable**: Support for custom easing functions and formatting
- 👁️ **Viewport Detection**: Optional animation trigger when element comes into view
- 📱 **TypeScript**: Full TypeScript support with proper type definitions
- 🎯 **Flexible**: Configurable duration, delay, decimals, and suffixes

## Installation

```bash
npm install react-countup-lite
# or
yarn add react-countup-lite
```

## Usage

### Basic Example

```tsx
import { CountUp } from 'react-countup-lite';

function App() {
  return (
    <div>
      <h1>
        Count: <CountUp end={1000} />
      </h1>
      <p>
        Revenue: <CountUp end={50000} suffix="k" />
      </p>
    </div>
  );
}
```

### Advanced Example

```tsx
import { CountUp } from 'react-countup-lite';

function App() {
  return (
    <div>
      {/* Animate when in viewport */}
      <CountUp
        start={0}
        end={1000}
        duration={3}
        delay={0.5}
        decimals={2}
        suffix="k"
        playOnView={true}
        className="highlight"
        style={{ fontSize: '24px', fontWeight: 'bold' }}
      />

      {/* Custom formatting */}
      <CountUp
        end={1234567}
        format={value => `$${value.toLocaleString()}`}
        duration={2}
      />
    </div>
  );
}
```

## Props

| Prop         | Type                        | Default        | Description                                  |
| ------------ | --------------------------- | -------------- | -------------------------------------------- |
| `start`      | `number`                    | `0`            | Starting value for the animation             |
| `end`        | `number`                    | **required**   | Target value to count up to                  |
| `duration`   | `number`                    | `2`            | Animation duration in seconds                |
| `delay`      | `number`                    | `0`            | Delay before animation starts in seconds     |
| `decimals`   | `number`                    | `0`            | Number of decimal places to display          |
| `format`     | `(value: number) => string` | -              | Custom formatting function                   |
| `suffix`     | `string`                    | -              | Suffix to append (e.g., 'k', 'M', '%')       |
| `easingFn`   | `(t: number) => number`     | `easeOutCubic` | Custom easing function                       |
| `playOnView` | `boolean`                   | `false`        | Start animation when element enters viewport |
| `className`  | `string`                    | -              | CSS class name                               |
| `style`      | `React.CSSProperties`       | -              | Inline styles                                |

## Easing Functions

The library supports easing functions:

- `easeOutCubic` (default)

You can also provide your own easing function:

```tsx
import { CountUp } from 'react-countup-lite';

const customEasing = (t: number) => t * t * (3 - 2 * t); // Smoothstep

<CountUp end={1000} easingFn={customEasing} duration={2} />;
```

## Development

### Setup

```bash
# Install dependencies
npm install

# Start development mode
npm start

# In another terminal, run the example
cd example
npm install
npm start
```

### Available Scripts

- `npm start` - Start development mode with watch
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run linter
- `npm run size` - Check bundle size

### Example

The `/example` directory contains a demo application where you can test the component with various configurations.

### Bundle Analysis

The project uses `size-limit` to ensure the library remains lightweight:

```bash
npm run size    # Check current bundle size
```

## License

MIT © Dawit Solomon

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
