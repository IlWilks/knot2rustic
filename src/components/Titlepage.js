import styled from 'styled-components'
import knotbackground from '../icons/backgroundknot.jpg'
import testbackground from '../icons/trialbackground.jpg'
import logo from "../icons/longlogo.png"
import caret from "../icons/caret.png"
import { Parallax } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar'

const TitleWrapper = styled.div`
  display: flex;
  min-height: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  justify-content: center;
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${testbackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;`

  const Caret = styled.img`
  height: 4em;
  width: auto;
  color: white;
  padding-top: 5%;
  `
export default () => {
  const history = useHistory();

  return (
    <div style={{height: "1600px"}}>
    <TitleWrapper>
      <Parallax y={["-40px", "500px"]} tagOuter="figure">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "auto", width: "auto"}}>
          <img src={logo} style={{height: "10em", width:"auto"}}/>
          <Caret src={caret}/>
          <h1 style={{color: 'white', fontFamily: "Arvo"}}>Scroll down to learn more</h1>
        </div>
      </Parallax>
    </TitleWrapper>
    </div>
  )
}