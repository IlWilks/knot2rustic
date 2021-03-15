import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

export default (props) => {
  const history = useHistory()
  const handleMoreClick = () => history.push('/more');
  const handleContactClick = () => history.push('/contact');
  const handleHomeClick = () => history.push('/');

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

  console.log(window.location.href)
  return (
  <Navdiv>
    <p style={{cursor:'pointer'}} onClick={handleHomeClick}>Home</p>
    <p style={{cursor:'pointer'}} onClick={handleContactClick}>Contact</p>
    <p style={{cursor:'pointer'}} onClick={handleMoreClick}>More Works</p>
  </Navdiv>
  )
}