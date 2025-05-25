import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

interface CodeDemo {
  id: number;
  title: string;
  description: string;
  code: string;
  language: string;
}

const demos: CodeDemo[] = [
  {
    id: 1,
    title: "React Custom Hook Demo",
    description: "A live demo of a simple React component using a hook.",
    language: "tsx",
    code: `function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}
render(<Counter />);`
  },
  {
    id: 2,
    title: "Simulated API Route Handler",
    description: "A mock version of an API route handler using JavaScript.",
    language: "javascript",
    code: `function testAPI() {
  return "Hello from simulated API!";
}

function App() {
  const [response, setResponse] = React.useState("");

  return (
    <div>
      <button onClick={() => setResponse(testAPI())}>
        Call API
      </button>
      <p>{response}</p>
    </div>
  );
}
render(<App />);`
  }
];

const LiveDemo: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<CodeDemo>(demos[0]);
  const [showResult, setShowResult] = useState(false);

  const isRunnable = selectedDemo.language === 'tsx' || selectedDemo.language === 'javascript';

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Live Code Demos</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300 max-w-2xl">
            Interactive code examples showcasing my development skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Examples</h3>
              <div className="space-y-2">
                {demos.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => {
                      setSelectedDemo(demo);
                      setShowResult(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 ${
                      selectedDemo.id === demo.id
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {demo.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {selectedDemo.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedDemo.description}</p>
              </div>

              <div className="p-4">
                <SyntaxHighlighter
                  language={selectedDemo.language}
                  style={atomOneDark}
                  customStyle={{
                    margin: 0,
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem'
                  }}
                >
                  {selectedDemo.code}
                </SyntaxHighlighter>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800 flex justify-end">
                {isRunnable ? (
                  <button
                    onClick={() => setShowResult(true)}
                    className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                  >
                    <Play size={16} className="mr-2" />
                    Run Example
                  </button>
                ) : (
                  <span className="text-sm text-gray-400 italic">Execution not supported for this language.</span>
                )}
              </div>

              {showResult && isRunnable && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <LiveProvider code={selectedDemo.code} noInline>
                    <LivePreview />
                    <LiveError className="text-red-500 mt-2" />
                  </LiveProvider>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
