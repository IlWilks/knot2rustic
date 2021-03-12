import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import slide1 from "../icons/slideshow2/Knot 2 Rustic slide show 2-01.png"
import slide2 from "../icons/slideshow2/Knot 2 Rustic slide show 2-02.png"
import slide3 from "../icons/slideshow2/Knot 2 Rustic slide show 2-03.png"
import slide4 from "../icons/slideshow2/Knot 2 Rustic slide show 2-04.png"
import slide5 from "../icons/slideshow2/Knot 2 Rustic slide show 2-05.png"
import slide6 from "../icons/slideshow2/edited 6th.png"
import slide7 from "../icons/slideshow2/Knot 2 Rustic slide show 2-07.png"
import slide8 from "../icons/slideshow2/Knot 2 Rustic slide show 2-08.png"
import slide9 from "../icons/slideshow2/Knot 2 Rustic slide show 2-09.png"
import slide10 from "../icons/slideshow2/Knot 2 Rustic slide show 2-10.png"
import slide11 from "../icons/slideshow2/Knot 2 Rustic slide show 2-11.png"
import slide12 from "../icons/slideshow2/edited 12th.png"
import slide13 from "../icons/slideshow2/edited 13th.png"
import slide14 from "../icons/slideshow2/Knot 2 Rustic slide show 2-14.png"
import slide15 from "../icons/slideshow2/Knot 2 Rustic slide show 2-15.png"
import slide16 from "../icons/slideshow2/Knot 2 Rustic slide show 2-16.png"
import slide17 from "../icons/slideshow2/Knot 2 Rustic slide show 2-17.png"
import slide18 from "../icons/slideshow2/Knot 2 Rustic slide show 2-18.png"
import slide19 from "../icons/slideshow2/Knot 2 Rustic slide show 2-19.png"
import titleslide from "../icons/slideshow2/edited first.png"

const images = [
  {
    original: titleslide,
    thumbnail: titleslide,
  },
  {
    original: slide2,
    thumbnail: slide2,
  },
  {
    original: slide3,
    thumbnail: slide3,
  },
  {
    original: slide4,
    thumbnail: slide4,
  },
  {
    original: slide5,
    thumbnail: slide5,
  },
  {
    original: slide6,
    thumbnail: slide6,
  },
  {
    original: slide7,
    thumbnail: slide7,
  },
  {
    original: slide8,
    thumbnail: slide8,
  },
  {
    original: slide9,
    thumbnail: slide9,
  },
  {
    original: slide10,
    thumbnail: slide10,
  },
  {
    original: slide11,
    thumbnail: slide11,
  },
  {
    original: slide12,
    thumbnail: slide12,
  },
  {
    original: slide13,
    thumbnail: slide13,
  },
  {
    original: slide14,
    thumbnail: slide14,
  },
  {
    original: slide15,
    thumbnail: slide15,
  },
  {
    original: slide16,
    thumbnail: slide16,
  },
  {
    original: slide17,
    thumbnail: slide17,
  },
  {
    original: slide18,
    thumbnail: slide18,
  },
  {
    original: slide19,
    thumbnail: slide19,
  },
  
];

export default () => {
  return (
      <ImageGallery items={images} />
  )
}