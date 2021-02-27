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
      <Gallery/>
    </div>
    </>
  )
}
