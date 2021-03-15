import styled from 'styled-components'
import testbackground from '../icons/trialbackground.jpg'
import logo from "../icons/editedlogo.png"
import caret from "../icons/caret.png"
import { Parallax } from 'react-scroll-parallax'
import { useHistory } from 'react-router-dom';

const TitleWrapper = styled.div`
  display: flex;
  min-height: 1600px;
  max-height: 100%;
  width: auto;
  height: auto;
  justify-content: center;
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${testbackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;`

  const Caret = styled.img`
  height: auto;
  max-width: 30%;
  color: white;
  padding-top: 5%;
  `
  const LearnMore = styled.h1`
  color: white;
  font-family: "Arvo";
  font-size: clamp(20px, 3vw, 40px);
  `
export default () => {
  const history = useHistory();

  return (
    <div style={{height: "100%"}}>
    <TitleWrapper>
      <Parallax y={["-40px", "700px"]} tagOuter="figure">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "auto", width: "auto", minWidth: "320px"}}>
          <img src={logo} style={{maxWidth: "60%", height: "auto"}}/>
          <Caret src={caret}/>
          <LearnMore>Scroll down to learn more</LearnMore>
        </div>
      </Parallax>
    </TitleWrapper>
    </div>
  )
}