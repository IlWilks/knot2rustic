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
    <p style={{textAlign: "center", fontSize: "25px", fontFamily: "'Playfair Display', serif"}}>
      For our <span style={{fontWeight: "bold", fontFamily: "Arvo", fontSize: "30px"}}>individual</span> clients, Knot 2 Rustic Woodworks creates <span style={{fontWeight: "bold", fontFamily: "Arvo", fontSize: "30px"}}>unique</span> pieces and installations with great meaning, purpose, and <span style={{fontWeight: "bold", fontFamily: "Arvo", fontSize: "30px"}}>beauty</span> that stand the test of time.  
      Look through our gallery to discover how Knot 2 Rustic Woodworks creates the perfect piece for any setting.
    </p>
    <Gallery/>
    </div>
    </>
  )
}
