import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Gallery from './Gallery'
import Titlepage from './Titlepage'
import { useHistory } from 'react-router-dom';

const Button = styled.button`
/* Adapt the colors based on primary prop */
background: "white";
color: "palevioletred";

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #505050;
border-radius: 3px;
`;

export default () => {
  const history = useHistory()
  const handleMoreClick = () => history.push('/more');
  const handleContactClick = () => history.push('/contact');
  const handleHomeClick = () => history.push('/');

  return(
    <>
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "20%", position: "absolute", top: "0px", fontSize: "20px", fontFamily: "'Playfair Display', serif",}}>
      <p style={{cursor:'pointer', color: "white",}} onClick={handleHomeClick}>Home</p>
      <p style={{cursor:'pointer', color: "white",}} onClick={handleContactClick}>Contact</p>
      <p style={{cursor:'pointer', color: "white",}} onClick={handleMoreClick}>More Works</p>
    </div>
    <Titlepage/>
    <div style={{paddingTop: "2%", paddingBottom: "2%"}}>
    <p style={{textAlign: "center", fontSize: "30px", fontFamily: "'Playfair Display', serif"}}>
      For our individual clients, Knot <span style={{fontSize: "35px"}}>2</span> Rustic Woodworks creates unique pieces and installations with great meaning, purpose, and beauty that stand the test of time.  
      Discover how Knot <span style={{fontSize: "35px"}}>2</span> Rustic Woodworks creates the perfect piece for any setting.
    </p>
    <Gallery/>
    </div>
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <a href={'/contact'} style={{marginLeft: "75%"}}><Button>Contact Mark and Tony and read reviews</Button></a>
      <a href={'/more'}><Button>View more works</Button></a>
    </div>
    </>
  )
}
