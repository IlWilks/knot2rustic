import styled from 'styled-components'
import knotbackground from '../icons/backgroundknot.jpg'
import logo from "../icons/logo.png"
import caret from "../icons/caret.png"
import { Parallax } from 'react-scroll-parallax'

const TitleWrapper = styled.div`
  display: flex;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${knotbackground});
  background-repeat: no-repeat;
  background-size: cover;`

  const Caret = styled.img`
  height: 100px;
  width: auto;
  color: white;
  padding-top: 20px;
  `
export default () => {
  return (
    <TitleWrapper>
      <Parallax y={[-35, 70]} tagOuter="figure">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "1080px", width: "auto"}}>
          <img src={logo}/>
          <Caret src={caret}/>
          <h1 style={{color: 'white', fontFamily: "Arvo"}}>Scroll down to learn more</h1>
        </div>
      </Parallax>
    </TitleWrapper>
  )
}