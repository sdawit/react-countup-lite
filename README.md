# React CountUp Lite

A lightweight, performant React component for animated counting with smooth easing functions and customizable formatting.

[![npm version](https://img.shields.io/npm/v/@sdawit/react-countup-lite.svg)](https://www.npmjs.com/package/@sdawit/react-countup-lite)
[![bundle size](https://img.shields.io/bundlephobia/min/@sdawit/react-countup-lite)](https://bundlephobia.com/package/@sdawit/react-countup-lite)
[![CI](https://github.com/sdawit/react-countup-lite/workflows/CI/badge.svg)](https://github.com/sdawit/react-countup-lite/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 **Lightweight**: Minimal bundle size with zero dependencies
- ⚡ **Performant**: Uses `requestAnimationFrame` for smooth animations
- 🎨 **Customizable**: Support for custom easing functions and formatting
- 👁️ **Viewport Detection**: Optional animation trigger when element comes into view
- 📱 **TypeScript**: Full TypeScript support with proper type definitions
- 🎯 **Flexible**: Configurable duration, delay, decimals, and suffixes
- 🔧 **Tree-shakable**: Only import what you need
- 🌐 **Cross-platform**: Works on all modern browsers and React versions

## Installation

```bash
npm install @sdawit/react-countup-lite
# or
yarn add @sdawit/react-countup-lite
```

## Usage

### Basic Example

```tsx
import { CountUp } from '@sdawit/react-countup-lite';

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
import { CountUp } from '@sdawit/react-countup-lite';

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
        format={(value) => `$${value.toLocaleString()}`}
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
import { CountUp } from '@sdawit/react-countup-lite';

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
- `npm run lint:fix` - Fix linting issues and format code
- `npm run size` - Check bundle size
- `npm run version:patch` - Bump patch version (1.0.0 → 1.0.1)
- `npm run version:minor` - Bump minor version (1.0.0 → 1.1.0)
- `npm run version:major` - Bump major version (1.0.0 → 2.0.0)

### Example

The `/example` directory contains a demo application where you can test the component with various configurations.

### Bundle Analysis

The project uses `size-limit` to ensure the library remains lightweight:

```bash
npm run size    # Check current bundle size
```

### Automated Releases

This project uses GitHub Actions for automated releases:

1. **Pre-release Testing**: Every pull request runs tests, linting, and bundle size checks
2. **Automated Publishing**: When you push a version tag (e.g., `v1.0.1`), it automatically:
   - Runs all tests and checks
   - Builds the package
   - Publishes to npm
   - Creates a GitHub release

#### To Release a New Version:

```bash
# Bump version and create git tag
npm run version:patch  # or version:minor, version:major

# Push changes and tag
git push origin main --tags
```

The release workflow will automatically publish to npm and create a GitHub release.

## Performance

- **Bundle Size**: ~820B minified and gzipped
- **Zero Dependencies**: No external dependencies
- **Tree-shakable**: Only includes code you actually use
- **Optimized**: Uses `requestAnimationFrame` for smooth 60fps animations
- **Memory Efficient**: Proper cleanup of timers and observers

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- React 16.8+ (for hooks support)

## License

MIT © Dawit Solomon

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Workflow

- All pull requests automatically run tests, linting, and bundle size checks
- Code must pass all CI checks before merging
- Use `npm run lint:fix` to automatically fix formatting issues
- Follow the existing code style and patterns

## Changelog

### [1.0.0] - 2025-07-09

- Initial release
- Lightweight React countup component with TypeScript support
- Customizable easing functions and formatting
- Viewport detection for animation triggers
- Zero dependencies, minimal bundle size (~820B)
