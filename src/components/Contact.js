import { Link } from "react-router-dom";
import styled from "styled-components"
import Home from "./Home";
import slide from "../icons/Editedmark.png"
import Navbar from "./Navbar";


export default () => {
  return (
    <>
    <Navbar/>
    <div style={{display: "flex", justifyContent: "center", paddingTop: "5em"}}>
      {/* <img src={slide} style={{width: "90%"}}/> */}
    </div>
    {/* <h1 style={{textAlign: "center", fontFamily: "'Playfair Display', serif", }}>Reviews</h1> */}
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <div style={{ display: "flex", flexDirection: "column", alignItems:"center", width: "20%"}}>
        <p style={{fontSize: "30px", fontFamily: "'Playfair Display', serif", fontStyle: "italic"}}>"Knot 2 Rustic Woodworks did an awesome job for us - we had a difficult wood pattern to match, and they nailed it. They paid attention to the smallest details, and we love our new barn door!"</p>
        <p style={{fontFamily: "'Playfair Display', serif"}}>-Wilkinson Dental</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems:"center", width: "60%"}}>
        <p style={{fontSize: "30px", fontFamily: "'Playfair Display', serif", fontStyle: "italic"}}>"I have used Knot 2 Rustic for many of my custom projects over the years.  They were very easy to work with from the design stage up until the day I received the finished piece(s). Their design team is incredible! I would tell them what I envisioned in my head, and they would draw it up so that I could actually see how it was going to look before they made it. The quality and workmanship of everything is top notch.  I have had their pieces in commercial settings for years with no signs of needing repair, and I continue to get asked the question "where did you get that"?  I would highly recommend Knot 2 Rustic to anyone who is looking for something unique, beautiful, durable and a piece that you will enjoy for many years!"</p>
        <p style={{fontFamily: "'Playfair Display', serif"}}>-Kevin McCarty</p>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "5em"}}>
        <p style={{fontSize: "30px", fontFamily: "'Playfair Display', serif",}}>Mark Tuttle: 417-522-8323</p>
        <p style={{fontSize: "30px", fontFamily: "'Playfair Display', serif",}}>Tony Bird: 417-299-7589</p>
    </div>
    </>
  )
}