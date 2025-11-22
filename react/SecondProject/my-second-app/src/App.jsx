import { useState } from 'react'
import { Minus, Plus, RotateCcw } from 'lucide-react'

/**
 * A responsive and interactive counter component.
 * It demonstrates basic state management using the useState hook.
 */
const App = () => {
  // Initialize the counter state to 0
  const [count, setCount] = useState(0)

  // Function to increment the count
  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  // Function to decrement the count, preventing it from going below 0
  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
  }

  // Function to reset the count
  const reset = () => {
    setCount(0)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-sm bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 text-center border border-gray-700">
        
        <h1 className="text-3xl font-extrabold text-blue-400 mb-6">
          React State Counter
        </h1>

        {/* Display Area */}
        <div className="mb-8">
          <p className="text-gray-400 text-lg mb-2">Current Value</p>
          <div className={`
            text-7xl font-mono font-bold p-6 rounded-xl transition-all duration-300 
            ${count === 0 ? 'text-yellow-400 bg-gray-700' : 'text-green-400 bg-gray-700'}
            shadow-inner
          `}>
            {count}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4 mb-6">
          {/* Decrement Button */}
          <button
            onClick={decrement}
            disabled={count === 0}
            className={`
              flex items-center justify-center p-4 rounded-full font-semibold text-lg transition duration-200 shadow-lg 
              transform active:scale-95 focus:outline-none focus:ring-4 
              ${count === 0 
                ? 'bg-red-900 text-red-400 cursor-not-allowed opacity-50' 
                : 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500/50'
              }
            `}
            aria-label="Decrement counter"
          >
            <Minus size={24} />
          </button>

          {/* Increment Button */}
          <button
            onClick={increment}
            className="flex items-center justify-center p-4 rounded-full font-semibold text-lg transition duration-200 shadow-lg transform active:scale-95 focus:outline-none focus:ring-4 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500/50"
            aria-label="Increment counter"
          >
            <Plus size={24} />
          </button>
        </div>
        
        {/* Reset Button */}
        <button
          onClick={reset}
          disabled={count === 0}
          className={`
            w-full py-3 mt-4 rounded-xl text-sm font-medium transition duration-200 shadow-md 
            flex items-center justify-center mx-auto space-x-2
            ${count === 0 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed opacity-50' 
              : 'bg-yellow-600 hover:bg-yellow-700 text-white focus:ring-yellow-500/50'
            }
          `}
          aria-label="Reset counter to zero"
        >
          <RotateCcw size={16} />
          <span>Reset</span>
        </button>

      </div>
    </div>
  )
}

export default App