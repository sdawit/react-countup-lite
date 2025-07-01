import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { CountUp } from '../src/components/CountUp';
import { defaultFormat, getSuffix } from '../src/utils/format';

function App() {
  const [value, setValue] = React.useState(1234567);
  const [suffixValue, suffix] = getSuffix(value);

  return (
    <div
      style={{
        padding: 40,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          color: '#333',
          borderBottom: '2px solid #007acc',
          paddingBottom: 10,
        }}
      >
        React CountUp Lite - Comprehensive Demo
      </h1>

      <div style={{ marginBottom: 40 }}>
        <p style={{ color: '#666', fontSize: 16 }}>
          A lightweight, performant React component for animated counting with
          smooth easing functions and customizable formatting.
        </p>
      </div>

      {/* Basic Examples */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            color: '#007acc',
            borderBottom: '1px solid #eee',
            paddingBottom: 10,
          }}
        >
          Basic Examples
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>Simple Count</h4>
            <CountUp end={1000} />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>With Custom Start</h4>
            <CountUp start={100} end={1000} />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>Fast Animation (1s)</h4>
            <CountUp end={1000} duration={1} />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>Slow Animation (5s)</h4>
            <CountUp end={1000} duration={5} />
          </div>
        </div>
      </section>

      {/* Formatting Examples */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            color: '#007acc',
            borderBottom: '1px solid #eee',
            paddingBottom: 10,
          }}
        >
          Formatting Examples
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>With Decimals</h4>
            <CountUp end={1000.5} decimals={1} />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>With Suffix</h4>
            <CountUp end={1000} suffix="k" />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>With Suffix & Decimals</h4>
            <CountUp end={1000} suffix="k" decimals={2} />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>Custom Formatting</h4>
            <CountUp
              end={1234567}
              format={(value) => `$${value.toLocaleString()}`}
            />
          </div>
        </div>
      </section>

      {/* Interactive Controls */}
      <div
        style={{
          background: '#f5f5f5',
          padding: 20,
          borderRadius: 8,
          marginBottom: 30,
        }}
      >
        <h3>Interactive Controls</h3>
        <div
          style={{
            display: 'flex',
            gap: 20,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <strong>Value:</strong>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              style={{
                padding: 8,
                border: '1px solid #ddd',
                borderRadius: 4,
                fontSize: 14,
              }}
            />
          </label>
          <div>
            <strong>Formatted:</strong> {defaultFormat(value, 2)}
          </div>
          <div>
            <strong>With Suffix:</strong> {suffixValue.toFixed(2)}
            {suffix}
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            color: '#007acc',
            borderBottom: '1px solid #eee',
            paddingBottom: 10,
          }}
        >
          Interactive Examples
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>Dynamic Value</h4>
            <CountUp end={value} duration={2} />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>With Auto Suffix</h4>
            <CountUp end={value} duration={2} suffix={suffix} />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>With Decimals & Suffix</h4>
            <CountUp end={value} duration={2} suffix={suffix} decimals={2} />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>Currency Format</h4>
            <CountUp
              end={value}
              format={(value) => `$${value.toLocaleString()}`}
              duration={2}
            />
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            color: '#007acc',
            borderBottom: '1px solid #eee',
            paddingBottom: 10,
          }}
        >
          Advanced Features
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>With Delay</h4>
            <CountUp start={0} end={1000} duration={2} delay={1} suffix="ms" />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>Styled Component</h4>
            <CountUp
              end={1000}
              className="highlight"
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#007acc',
              }}
            />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>Percentage</h4>
            <CountUp end={95.5} decimals={1} suffix="%" duration={3} />
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>Scientific Notation</h4>
            <CountUp
              end={1.23e6}
              format={(value) => value.toExponential(2)}
              duration={2}
            />
          </div>
        </div>
      </section>

      {/* Real-world Scenarios */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            color: '#007acc',
            borderBottom: '1px solid #eee',
            paddingBottom: 10,
          }}
        >
          Real-world Scenarios
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 20,
          }}
        >
          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>📊 Analytics Dashboard</h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 15,
              }}
            >
              <div>
                <small>Total Users</small>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                  <CountUp end={15420} suffix="k" duration={2} />
                </div>
              </div>
              <div>
                <small>Revenue</small>
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#28a745',
                  }}
                >
                  <CountUp
                    end={2345678}
                    format={(value) => `$${(value / 1000000).toFixed(1)}M`}
                    duration={2}
                  />
                </div>
              </div>
              <div>
                <small>Conversion Rate</small>
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#007acc',
                  }}
                >
                  <CountUp end={3.2} decimals={1} suffix="%" duration={2} />
                </div>
              </div>
              <div>
                <small>Page Views</small>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                  <CountUp
                    end={1234567}
                    format={(value) => value.toLocaleString()}
                    duration={2}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ padding: 20, border: '1px solid #eee', borderRadius: 8 }}
          >
            <h4>🎯 Progress Indicators</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                  }}
                >
                  <span>Task Completion</span>
                  <CountUp end={87} suffix="%" duration={2} />
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 8,
                    background: '#eee',
                    borderRadius: 4,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '87%',
                      height: '100%',
                      background: '#28a745',
                      transition: 'width 2s ease-out',
                    }}
                  />
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                  }}
                >
                  <span>File Upload</span>
                  <CountUp end={64.5} decimals={1} suffix="%" duration={2} />
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 8,
                    background: '#eee',
                    borderRadius: 4,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '64.5%',
                      height: '100%',
                      background: '#007acc',
                      transition: 'width 2s ease-out',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Demo */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            color: '#007acc',
            borderBottom: '1px solid #eee',
            paddingBottom: 10,
          }}
        >
          Performance Demo
        </h2>

        <div
          style={{
            background: '#f8f9fa',
            padding: 20,
            borderRadius: 8,
            border: '1px solid #e9ecef',
          }}
        >
          <p style={{ marginBottom: 15 }}>
            <strong>Multiple CountUp components running simultaneously:</strong>
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 15,
            }}
          >
            <CountUp end={1000} duration={1.5} />
            <CountUp end={2000} duration={2} />
            <CountUp end={3000} duration={2.5} />
            <CountUp end={4000} duration={3} />
            <CountUp end={5000} duration={3.5} />
            <CountUp end={6000} duration={4} />
          </div>
        </div>
      </section>

      {/* Features List */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            color: '#007acc',
            borderBottom: '1px solid #eee',
            paddingBottom: 10,
          }}
        >
          Features
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 20,
          }}
        >
          <div style={{ padding: 15, background: '#f8f9fa', borderRadius: 8 }}>
            <h4>🚀 Lightweight</h4>
            <p style={{ margin: 0, fontSize: 14 }}>
              Minimal bundle size with zero dependencies
            </p>
          </div>

          <div style={{ padding: 15, background: '#f8f9fa', borderRadius: 8 }}>
            <h4>⚡ Performant</h4>
            <p style={{ margin: 0, fontSize: 14 }}>
              Uses requestAnimationFrame for smooth animations
            </p>
          </div>

          <div style={{ padding: 15, background: '#f8f9fa', borderRadius: 8 }}>
            <h4>🎨 Customizable</h4>
            <p style={{ margin: 0, fontSize: 14 }}>
              Support for custom easing functions and formatting
            </p>
          </div>

          <div style={{ padding: 15, background: '#f8f9fa', borderRadius: 8 }}>
            <h4>👁️ Viewport Detection</h4>
            <p style={{ margin: 0, fontSize: 14 }}>
              Optional animation trigger when element comes into view
            </p>
          </div>

          <div style={{ padding: 15, background: '#f8f9fa', borderRadius: 8 }}>
            <h4>📱 TypeScript</h4>
            <p style={{ margin: 0, fontSize: 14 }}>
              Full TypeScript support with proper type definitions
            </p>
          </div>

          <div style={{ padding: 15, background: '#f8f9fa', borderRadius: 8 }}>
            <h4>🎯 Flexible</h4>
            <p style={{ margin: 0, fontSize: 14 }}>
              Configurable duration, delay, decimals, and suffixes
            </p>
          </div>
        </div>
      </section>

      <footer
        style={{
          textAlign: 'center',
          padding: 20,
          borderTop: '1px solid #eee',
          color: '#666',
          fontSize: 14,
        }}
      >
        <p>
          React CountUp Lite - A lightweight, performant counting animation
          component
        </p>
        <p>Built with ❤️ using React and TypeScript</p>
      </footer>
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
