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
const Navdiv = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-start;
width: 320px;
position: absolute;
top: 0px;
font-family: 'Playfair Display', serif;
font-size: clamp(10px, 5vw, 22px);
`
const Mission = styled.p`
text-align: center;
font-size: clamp(10px, 3vw, 30px);
font-family: 'Playfair Display', serif;
`
const Two = styled.span`
font-size: clamp(15px, 3vw, 35px)
`

export default () => {
  const history = useHistory()
  const handleMoreClick = () => history.push('/more');
  const handleContactClick = () => history.push('/contact');
  const handleHomeClick = () => history.push('/');

  return(
    <>
    <Navdiv>
      <p style={{cursor:'pointer', color: "white",}} onClick={handleHomeClick}>Home</p>
      <p style={{cursor:'pointer', color: "white",}} onClick={handleContactClick}>Contact</p>
      <p style={{cursor:'pointer', color: "white",}} onClick={handleMoreClick}>More Works</p>
    </Navdiv>
    <Titlepage/>
    <div style={{paddingTop: "2%", paddingBottom: "2%"}}>
    <Mission >
      For our individual clients, Knot <Two>2</Two> Rustic Woodworks creates unique pieces and installations with great meaning, purpose, and beauty that stand the test of time.  
      Discover how Knot <Two>2</Two> Rustic Woodworks creates the perfect piece for any setting.
    </Mission>
    <Gallery/>
    </div>
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <a href={'/contact'} style={{marginLeft: "75%"}}><Button>Contact Mark and Tony and read reviews</Button></a>
      <a href={'/more'}><Button>View more works</Button></a>
    </div>
    </>
  )
}
