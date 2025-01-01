 //DesktopNavigation.js
 import NavLinks from "./NavLinks";
 import './NavBar.css';
 import logo from './../../Images/logo.png'


 const DesktopNavigation = () =>{
     return(
        <nav className="DesktopNavigation">
            <img src={logo} alt='brand logo'/>
            <NavLinks />
        </nav>
        
     )
 }

 export default DesktopNavigation;

