import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';


function Product() {
    const {productId} = useParams();
    const getProductDetails = async ()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
    return data.product;
  }
  const addtoCart = (ProductID)=>{
    console.log(productId);
  }

  const {data,isLoading} = useQuery('product_Details', getProductDetails);

  if(isLoading){
    return <h2>Loading...</h2>
  }
  return (
      <div className='container'>
          <div className='product row ' key={data._id}>
              <h2 >{data.name}</h2>
              <div className='col-lg-4'>
                  {data.subImages.map((img, index) =>
                      <React.Fragment key={index}>
                          <ReactImageMagnify className='p-2' {...{
                              smallImage: {
                                  alt: 'clothes',
                                  isFluidWidth: true,
                                  src: img.secure_url,
                                  
                              },
                              largeImage: {
                                  src: img.secure_url,
                                  width: 500,
                                  height: 700
                              },
                              isHintEnabled: true,
                              enlargedImagePosition: 'over',
                          }} />
                      </React.Fragment>



                  )}
              </div>
              
              <h2 className='p-4'>{data.name}</h2>
              <button className='btn btn-outline-info' onClick={()=>addtoCart(data._id)}>Add to Cart</button> 


          </div>
      </div>
  )
}

export default Product