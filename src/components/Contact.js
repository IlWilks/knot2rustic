import { Link } from "react-router-dom";
import styled from "styled-components"
import Home from "./Home";
import slide from "../icons/Editedmark.png"
import Navbar from "./Navbar";


export default () => {
  return (
    <>
    <Navbar/>
    <div style={{display: "flex", justifyContent: "space-around", paddingTop: "5em"}}>
      <div style={{ display: "flex", flexDirection: "column", alignItems:"center", width: "40%"}}>
        <p style={{fontSize: "30px", fontFamily: "'Playfair Display', serif", fontStyle: "italic"}}>"Knot 2 Rustic Woodworks did an awesome job for us - we had a difficult wood pattern to match, and they nailed it. They paid attention to the smallest details, and we love our new barn door!"</p>
        <p style={{fontFamily: "'Playfair Display', serif"}}>-Wilkinson Dental</p>
      </div>
      {/* <div style={{ display: "flex", flexDirection: "column", alignItems:"center", width: "40%"}}>
        <p style={{fontSize: "30px", fontFamily: "'Playfair Display', serif", fontStyle: "italic"}}>"Knot 2 Rustic Woodworks did an awesome job for us - we had a difficult wood pattern to match, and they nailed it. They paid attention to the smallest details, and we love our new barn door!"</p>
        <p style={{fontFamily: "'Playfair Display', serif"}}>-Second Review</p>
      </div> */}
    </div>
    <div style={{display: "flex", justifyContent: "center"}}>
      <img src={slide} style={{width: "90%"}}/>
    </div>
    </>
  )
}