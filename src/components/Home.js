import styled from 'styled-components'
import Gallery from './Gallery'
import Titlepage from './Titlepage'

const HomeWrapper = styled.div`
  display: flex;
`
export default () => {
  return(
    <>
    <Titlepage/>
    <div style={{paddingTop: "50px",}}>
    <p style={{textAlign: "center", fontSize: "30px", fontFamily: "'Playfair Display', serif"}}>
      For our <span style={{fontWeight: "bold", fontFamily: "Arvo", fontSize: "50px"}}>individual</span> clients, Knot 2 Rustic Woodworks creates <span style={{fontWeight: "bold", fontFamily: "Arvo", fontSize: "50px"}}>unique</span> pieces and installations with great meaning, purpose, and <span style={{fontWeight: "bold", fontFamily: "Arvo", fontSize: "50px"}}>beauty</span> that stand the test of time.  
      Follow along below to discover how Knot 2 Rustic Woodworks creates the <span style={{fontWeight: "bold", fontFamily: "Arvo", fontSize: "50px"}}>perfect</span> piece for any setting.
    </p>
    <Gallery/>
    <p style={{textAlign: "center", fontSize: "30px", fontFamily: "'Playfair Display', serif"}}>
      Like any great woodworking design, we consider each of our clients to be unique. Mark and Tony prefer to communicate face to face or over the phone to ensure that each project is held to their high standards. If you are ready to find your perfect piece, click here to contact them. 
    </p>
    </div>
    </>
  )
}
