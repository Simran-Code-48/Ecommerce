import React, { useState } from 'react';

const Filters = ({ list, setList }) => {
  const [open, setOpen] = useState(false);
  const [colour, setColour] = useState('all');
  const [priceRange, setPriceRange] = useState('');
  const [type, setType] = useState('all');
  const [sortOrder, setSortOrder] = useState('');

  const colors = [...new Set(list.map((product) => product.color))];
  const types = [...new Set(list.map((product) => product.type))];
  const [stocks , setStocks] = useState('all');

  const handleFilterChange = () => {
    let filteredList = [...list];
    if (colour !== '' && colour !== 'all') {
      filteredList = filteredList.filter(item => item.color.toLowerCase() === colour.toLowerCase());
    }
    if (priceRange !== '') {
      const [minPrice, maxPrice] = priceRange.split('-').map(parseFloat);
      filteredList = filteredList.filter(item => item.price >= minPrice && item.Price <= maxPrice);
    }
    if (type !== '' && type !== 'all') {
      filteredList = filteredList.filter(item => item.type.toLowerCase() === type.toLowerCase());
    }
    if (sortOrder !== '') {
      filteredList.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
    }
    
    if(stocks !== 'all'){
      filteredList = filteredList.filter(item => stocks === 'instock' ? item.stock > 0 : item.stock === 0);
    }
    setList(filteredList);
    setOpen(!open);
  };

  return (
    <div className="relative">
      <button
        className='border-2 px-6 py-4 flex w-[150px] rounded-full border-blue-600 text-blue-600'
        onClick={() => setOpen(!open)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5">
          <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/>
        </svg>
        <p className="ml-3 font-semibold">Filters</p>
      </button>

      <div className={`${open ? 'block' : 'hidden'} absolute top-full left-0 z-10 bg-white border-2 border-gray-300 shadow-lg p-5 rounded-xl`}>
        <div>
          <label className='text-gray-500 text-lg font-semibold'>Colour:</label>
          <div className='grid grid-cols-4 ml-4 mt-2 mb-5'>
            <div>
              <input
                type="radio"
                id={`colourAll`}
                name="colour"
                value='all'
                checked={colour === 'all'}
                onChange={(e) => setColour(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="colourAll">All</label>
            </div>
            {colors.map((color) => (
              <div key={color}>
                <input
                  type="radio"
                  id={`colour${color}`}
                  name="colour"
                  value={color}
                  checked={colour === color}
                  onChange={(e) => setColour(e.target.value)}
                  className="mr-1"
                />
                <label htmlFor={`colour${color}`}>{color}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className='text-gray-500 text-lg font-semibold'>Sort by Price:</label>
          <div className='ml-4 mt-2 mb-5'>
            <div>
              <input
                type="radio"
                id="priceSortAsc"
                name="priceSort"
                value="asc"
                checked={sortOrder === 'asc'}
                onChange={(e) => setSortOrder(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="priceSortAsc" className='text-lg'>Low to High</label>
            </div>
            <div>
              <input
                type="radio"
                id="priceSortDesc"
                name="priceSort"
                value="desc"
                checked={sortOrder === 'desc'}
                onChange={(e) => setSortOrder(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="priceSortDesc" className='text-lg'>High to Low</label>
            </div>
          </div>
        </div>

        <div>
          <label className='text-gray-500 text-lg font-semibold'>Type:</label>
          <div className='ml-4 mt-2 mb-5'>
            <div>
              <input
                type="radio"
                id={`typeAll`}
                name="type"
                value='all'
                checked={type === 'all'}
                onChange={(e) => setType(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="typeAll" className='text-lg'>All</label>
            </div>
            {types.map((t) => (
              <div key={t}>
                <input
                  type="radio"
                  id={`type${t}`}
                  name="type"
                  value={t}
                  checked={type === t}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-1"
                />
                <label htmlFor={`type${t}`} className='text-lg'>{t}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className='text-gray-500 text-lg font-semibold'>Stock:</label>
          <div className='ml-4 mt-2 mb-5'>
            <div>
              <input
                type="radio"
                id={`stockAll`}
                name="stock"
                value='all'
                checked={stocks === 'all'}
                onChange={(e) => setStocks(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="typeAll" className='text-lg'>All</label>
            </div>
            <div>
              <input
                type="radio"
                id={`inStock`}
                name="stock"
                value='instock'
                checked={stocks === 'instock'}
                onChange={(e) => setStocks(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="typeAll" className='text-lg'>In stock</label>
            </div>
            <div>
              <input
                type="radio"
                id={`outOfStock`}
                name="stock"
                value='outofstock'
                checked={stocks === 'outofstock'}
                onChange={(e) => setStocks(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="typeAll" className='text-lg'>Out of stock</label>
            </div>
          </div>
        </div>

        <button
          className='block bg-orange-500 font-semibold text-white px-5 py-3 rounded-xl hover:shadow-lg hover:bg-orange-700'
          onClick={handleFilterChange}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
