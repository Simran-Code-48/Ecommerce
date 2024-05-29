import React from 'react'
import products from '../components/data/products'
import Item from '../components/Item'

const CategoryPage = ({category}) => {
  return (
	<>
    <h1>{(category==='Kids'?'Kids':category+"'s")} T-shirt</h1>
    <div className="products">
      {products.map((item, i) => {
        // console.log( item.Gender, category)
        if(item.Gender===category){
          return <Item key={item.id} details={item}/>
        }else{
          return null;
        }
      })}
    </div>
  </>
  )
}

export default CategoryPage