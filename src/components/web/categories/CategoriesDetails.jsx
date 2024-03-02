import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

function CategoriesDetails() {

    const {categoryId} = useParams();
    const getCategoryDetails = async ()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`);
    return data.products;
  }

  const {data,isLoading} = useQuery('category_Details', getCategoryDetails);

  if(isLoading){
    return <h2>Loading...</h2>
  }
  return (
    <div className='container'>
      
        {data?.length ? data?.map((product)=>
        <Link to={`/products/${product._id}`} key={product._id} >
        <div className='products' >
            <h2 >{product.name}</h2>
          <img src={product.mainImage.secure_url}/>
        </div>
          
        </Link>
        
        ):<h2>no product found</h2>}
        </div>
  )
}

export default CategoriesDetails