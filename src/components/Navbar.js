import { useHistory } from 'react-router-dom';

export default (props) => {
  const history = useHistory()
  const handleMoreClick = () => history.push('/more');
  const handleContactClick = () => history.push('/contact');
  const handleHomeClick = () => history.push('/');

  console.log(window.location.href)
  return (
  <div style={{color: window.location.href !== "http://localhost:3000/" ? "black" : "white",  display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "20%", position: "absolute", top: "0px", right: "0px", fontSize: "20px", fontFamily: "'Playfair Display', serif",}}>
    <p style={{cursor:'pointer'}} onClick={handleHomeClick}>Home</p>
    <p style={{cursor:'pointer'}} onClick={handleContactClick}>Contact</p>
    <p style={{cursor:'pointer'}} onClick={handleMoreClick}>More Works</p>
  </div>
  )
}