import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import slide1 from "../icons/slideshow1/2016 K2R slide show-1.png"
import slide2 from "../icons/slideshow1/2016 K2R slide show-2.png"
import slide3 from "../icons/slideshow1/2016 K2R slide show-3.png"
import slide4 from "../icons/slideshow1/2016 K2R slide show-4.png"
import slide5 from "../icons/slideshow1/2016 K2R slide show-5.png"
import slide6 from "../icons/slideshow1/2016 K2R slide show-6.png"
import slide7 from "../icons/slideshow1/2016 K2R slide show-7.png"
import slide8 from "../icons/slideshow1/2016 K2R slide show-8.png"
import slide9 from "../icons/slideshow1/2016 K2R slide show-9.png"
import slide10 from "../icons/slideshow1/2016 K2R slide show-10.png"
import slide11 from "../icons/slideshow1/2016 K2R slide show-11.png"
import slide12 from "../icons/slideshow1/2016 K2R slide show-12.png"
import slide13 from "../icons/slideshow1/2016 K2R slide show-13.png"
import slide14 from "../icons/slideshow1/2016 K2R slide show-14.png"
import slide15 from "../icons/slideshow1/2016 K2R slide show-15.png"
import slide16 from "../icons/slideshow1/2016 K2R slide show-16.png"
import slide17 from "../icons/slideshow1/2016 K2R slide show-17.png"
import slide18 from "../icons/slideshow1/2016 K2R slide show-18.png"
import slide19 from "../icons/slideshow1/2016 K2R slide show-19.png"
import slide20 from "../icons/slideshow1/2016 K2R slide show-20.png"
import slide21 from "../icons/slideshow1/2016 K2R slide show-21.png"
import slide22 from "../icons/slideshow1/2016 K2R slide show-22.png"
import slide23 from "../icons/slideshow1/2016 K2R slide show-23.png"
import slide24 from "../icons/slideshow1/2016 K2R slide show-24.png"
import slide25 from "../icons/slideshow1/2016 K2R slide show-25.png"
import slide26 from "../icons/slideshow1/2016 K2R slide show-26.png"
import slide27 from "../icons/slideshow1/2016 K2R slide show-27.png"
import slide28 from "../icons/slideshow1/2016 K2R slide show-28.png"
import slide29 from "../icons/slideshow1/2016 K2R slide show-29.png"
import Navbar from './Navbar';
import { black } from 'chalk';

const images = [
  {
    original: slide1,
    thumbnail: slide1,
  },{
    original: slide2,
    thumbnail: slide2,
  },{
    original: slide3,
    thumbnail: slide3,
  },{
    original: slide4,
    thumbnail: slide4,
  },{
    original: slide5,
    thumbnail: slide5,
  },{
    original: slide6,
    thumbnail: slide6,
  },{
    original: slide7,
    thumbnail: slide7,
  },{
    original: slide8,
    thumbnail: slide8,
  },{
    original: slide9,
    thumbnail: slide9,
  },{
    original: slide10,
    thumbnail: slide10,
  },{
    original: slide11,
    thumbnail: slide11,
  },{
    original: slide12,
    thumbnail: slide12,
  },{
    original: slide13,
    thumbnail: slide13,
  },{
    original: slide14,
    thumbnail: slide14,
  },{
    original: slide15,
    thumbnail: slide15,
  },{
    original: slide16,
    thumbnail: slide16,
  },{
    original: slide17,
    thumbnail: slide17,
  },{
    original: slide8,
    thumbnail: slide18,
  },{
    original: slide19,
    thumbnail: slide19,
  },{
    original: slide20,
    thumbnail: slide20,
  },{
    original: slide21,
    thumbnail: slide21,
  },{
    original: slide22,
    thumbnail: slide22,
  },{
    original: slide23,
    thumbnail: slide23,
  },{
    original: slide24,
    thumbnail: slide24,
  },{
    original: slide25,
    thumbnail: slide25,
  },{
    original: slide26,
    thumbnail: slide26,
  },{
    original: slide27,
    thumbnail: slide27,
  },{
    original: slide28,
    thumbnail: slide28,
  },{
    original: slide29,
    thumbnail: slide29,
  },
]
export default () => {
  return (
    <>
      <Navbar style={{color: 'black'}}/>
      <div style={{paddingTop: "100px"}}>
        <ImageGallery items={images}/>
      </div>
    </>
  )
}