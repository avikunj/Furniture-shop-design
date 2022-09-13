import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import BellyChair from '../../img/bellychair.jpg'
import Chair from '../../img/chair.jpg'
import RossyChair from '../../img/rossy chair.jpg'
import {AiFillPlusCircle} from 'react-icons/ai'
const Popularitem = () => {
  return (
    <div className="popularitem">
        <h4>Popular Items<span>See all</span></h4>
 <div className='Container py-4 px-4 justify-content-center '>
<Swiper  
freeMode={true}
grabCursor={true}
modules={[FreeMode]}
className="mySwiper"
slidesPerView={2}
spaceBetween={10}

>
    <div >

<SwiperSlide>
<img src={RossyChair} height={100} width={120} className="image1"/>
< div className='popularitemprice'>

<h5>Belly Chair</h5>
<p>$120 </p><AiFillPlusCircle 
className='plus1'/>
</div>
    </SwiperSlide>
    <SwiperSlide>
<img src={BellyChair} height={100} width={120} className="image1"/>
< div className='popularitemprice'>

<h5>Belly Chair</h5>
<p>$120 </p><AiFillPlusCircle 
className='plus1'/>
</div>
    </SwiperSlide>
    <SwiperSlide>
<img src={Chair} height={100} width={120} className="image1"/>
< div className='popularitemprice'>

<h5>Belly Chair</h5>
<p>$120 </p><AiFillPlusCircle 
className='plus1'/>
</div>
    </SwiperSlide>

   
   


    </div>
</Swiper>

</div>
    </div>
  )
}

export default Popularitem