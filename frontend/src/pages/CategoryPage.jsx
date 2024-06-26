import React, { useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import {useSelector} from 'react-redux';
import Search from '../components/Search.jsx';
import Filter from '../components/Filter.jsx';

const CategoryPage = ({category}) => {
	const products = useSelector((state) => state.products.products);
	// console.log(products)
	const [list, setList] = useState(products);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{category === 'Kids' ? 'Kids' : category + "'s"} T-shirt</h1>
      <Search list={products} setList={setList} />
      <Filter list={products} setList={setList} />
      <div className="mx-auto products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-4">
        {list.filter((item) => category==='All' || item.category === category).map((item, i) => {
          return <ProductCard key={i} details={item} />
          
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
