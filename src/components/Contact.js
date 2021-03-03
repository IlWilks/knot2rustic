import { Link } from "react-router-dom";
import styled from "styled-components"
import Home from "./Home";
import slide from "../icons/Editedmark.png"
import Navbar from "./Navbar";


export default () => {
  return (
    <>
    <Navbar/>
    <p style={{textAlign: "center", fontSize: "25px", fontFamily: "'Playfair Display', serif", paddingRight: "200px", paddingLeft: "200px", paddingTop: "50px"}}>
      Exceptional results occur when eyes, hands, and minds work in unison to make something from raw materials that only the heart can inspire.   Match the amazing skills and full career experience of a true master craftsman like Tony Bird with the innovating and imagining skills of architect and furniture designer, Mark Tuttle, and you just might have a case of serendipity in the woodshop!  Tony is both a rancher and a craftsman by choice, excelling at both by hard and smart work.  Mark has designed at every scale from furnishings to village planning.  It's all a matter of letting the right solution express itself all the way through the design and building process.  Since 2009, Mark and Tony have found great joy as they’ve worked together to make each piece as simple and expressive as possible.  Then, when they instill personal meaningful connections into a piece for their clients, they’ve hit the nail on the head!  Really, that's what makes them tick. 
    </p>
    <div style={{display: "flex", justifyContent: "center"}}>
      <img src={slide} style={{width: "90%"}}/>
    </div>
    </>
  )
}