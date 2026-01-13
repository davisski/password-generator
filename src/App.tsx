import { useState } from 'react';
import './App.css'
import copy from './assets/copy-icon.svg';
import arrowRight from './assets/arrow-right.svg';
import { CheckboxComponent } from './components/CheckboxComponent';
function App() {
  const [strengthIncludes, setStrengthIncludes] = useState<
    { type: string; text: string }[]
  >(
    () => {
      return [
          { type: 'uppercase', text: 'Include Uppercase Letters' },
          { type: 'lowercase', text: 'Include Lowercase Letters' },
          { type: 'numbers', text: 'Include Numbers' },
          { type: 'symbols', text: 'Include Symbols' },
        ]
    }
  );

  return (
    <>
      <div className='container'>
        <h1 className='text-preset-2 text-grey-600'>Password Generator</h1>

        <div className="password flex space-between align-center">
          <div className='text-preset-1 text-grey-700'>P4$5WOrd!</div>
          <img src={copy} alt="Copy password" />
        </div>

        <div className="generator">

          <div className="generator-controls flex flex-column">
            <label htmlFor="length" className='align-self-start flex space-between align-center text-preset-3 text-grey-200'>
              <span>Character Length</span>
              <span className='text-preset-1 text-green-200'>0</span>
            </label>
            <input type="range" name="length" id="length" min="0" max="20" step="1" />
          </div>

          <div className='flex flex-column checkbox-container'>
            {strengthIncludes.map((type) => (
              <CheckboxComponent key={type.type} type={type} />
            ))}
          </div>

          <div className="generator-strength bg-grey-850 flex space-between align-center">
            <div className='text-preset-3 text-grey-600 text-upper'>Strength</div>
            <div className="strength-indicator flex space-between align-center">
              <div className="strength-bar bg-grey-700"></div>
              <div className="strength-bar bg-grey-700"></div>
              <div className="strength-bar bg-grey-700"></div>
              <div className="strength-bar bg-grey-700"></div>
            </div>
          </div>

          <button className='text-preset-3 flex align-center justify-center text-grey-800 bg-green-200 text-upper'>
            <span>Generate</span>
            <img src={arrowRight} alt="Generate password" />
          </button>

        </div>
      </div>
    </>
  )
}

export default App
