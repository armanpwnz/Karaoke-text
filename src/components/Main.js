import React, { useState } from 'react'

const Main = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => setValue(e.target.value)

  const replaceNumberToWord = (str) => {
    const numbers = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
    }

    return str
      .split(' ')
      .map((word) => (typeof numbers[word] === 'undefined' ? word : numbers[word]))
      .join(' ')
  }
  const onClick = () => setValue(replaceNumberToWord)

  return (
    <div className="flex items-center justify-center h-auto p-40">
      <div className="bg-indigo-800 text-white w-4/5 font-bold rounded-lg border shadow-lg p-10">
        <label className="flex-col items-center">
          <span className="flex justify-center">Write the lyrics of your favorite song</span>
          <textarea
            className="form-textarea mt-1 md:mt-1 block w-full text-black"
            rows="5"
            placeholder="Enter text song"
            value={value}
            onChange={onChange}
          ></textarea>
          <div className="flex items-center justify-center pt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              id="search-button"
              type="button"
              onClick={onClick}
            >
              Tranform
            </button>
          </div>
        </label>
      </div>
    </div>
  )
}

export default Main
