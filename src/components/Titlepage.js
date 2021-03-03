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
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${testbackground});
  background-repeat: no-repeat;
  background-size: contain`

  const Caret = styled.img`
  height: 100px;
  width: auto;
  color: white;
  padding-top: 20px;
  `
export default () => {
  const history = useHistory();

  return (
    <TitleWrapper>
      <Navbar/>
      <Parallax y={[-10, 50]} tagOuter="figure">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "2127px", width: "auto"}}>
          <img src={logo} style={{height: "6%", width:"auto"}}/>
          <Caret src={caret}/>
          <h1 style={{color: 'white', fontFamily: "Arvo"}}>Scroll down to learn more</h1>
        </div>
      </Parallax>
    </TitleWrapper>
  )
}