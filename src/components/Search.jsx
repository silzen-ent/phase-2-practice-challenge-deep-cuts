import React from 'react'

function Search({search, setSearch}) {
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          vakye-={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search