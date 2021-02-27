import styled from 'styled-components'
import knotbackground from '../icons/backgroundknot.jpg'
import logo from "../icons/logo.png"
import caret from "../icons/caret.png"

const TitleWrapper = styled.div`
  display: flex;
  width: auto;
  height: auto;
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${knotbackground});
  background-repeat: no-repeat;
  background-size: cover;`

  const Caret = styled.img`
  height: 10%;
  width: auto;
  color: white;
  padding-top: 20px;
  `
export default () => {
  return (
    <TitleWrapper>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "1080px", width: "1920px"}}>
        <img src={logo}/>
        <Caret src={caret}/>
        <h1 style={{color: 'white',}}>Scroll down to learn more</h1>
      </div>
    </TitleWrapper>
  )
}