import axios from 'axios';
import {useQuery} from  'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { Link } from 'react-router-dom';

function Categories() {

  const getCategories = async ()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
    return data;
  }

  const {data,isLoading} = useQuery('web-categories', getCategories);
  console.log(isLoading);

  if(isLoading){
    return <h2>Loading...</h2>
  }
  return (
    <div className='container'>
      <Swiper className='pt-4'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3.4}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {data?.categories.length ? data?.categories.map((category)=>
        
        <SwiperSlide key={category._id}>
          <Link to={`/products/category/${category._id}`}>
              <div >
                <img src={category.image.secure_url} />
              </div>

          </Link>
        </SwiperSlide>
        
        

        ):<h2>no category found</h2>}
        
       </Swiper> 
    </div>
  )
}

export default Categories