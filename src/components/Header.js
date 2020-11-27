import React from 'react'

const Header = () => {
  return (
    <nav className="flex bg-indigo-800 items-center justify-between flex-wrap p-6 text-white font-bold">
      <div className="flex flex-shrink-0 mr-6">Karaoke</div>
    </nav>
  )
}

export default React.memo(Header)
