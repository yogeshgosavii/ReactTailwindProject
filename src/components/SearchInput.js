import React from 'react'

function SearchInput({classname,placeholder="Search by keyword",...props}) {
  return (
    <div className={`border-[1px] border-gray-400 w-full max-w-screen-sm rounded-full mt-5 px-8 py-3  flex flex-row items-center gap-4 ${classname}`}>
        <svg className="h-6 w-6 text-gray-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        <input className={` outline-none text-lg w-full  placeholder:text-gray-500 truncate  flex items-center`} {...props} placeholder={placeholder} />
    </div>
  )
}

export default SearchInput