import React, { useState } from 'react';

const Search = ({ list, setList }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filteredList = list.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue) ||
        item.color.toLowerCase().includes(searchValue) || // Fixing the property name from 'Color' to 'Colour'
        item.type.toLowerCase().includes(searchValue)
    );

    setList(filteredList);
  };

  return (
    <div className='my-5 shadow mx-auto md:w-3/4 px-10 py-4 border-2 border-gray-300 rounded-full flex'>
      <input 
      type="text"
      placeholder="Search . . . . .  "
      value={searchTerm}
      onChange={handleSearch}
      className='w-[97%] focus:outline-none inline'
    />
    <svg className='inline' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f5c5c"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
    </div>
  );
};

export default Search;
