import './NavBar.css';


const Navlinks = ({isClicked, closeMenu}) => {
    return (
        <nav className="Navlinks">
            <ul>
                <li onClick={()=> isClicked && closeMenu}><a href='/'>Home</a></li>
                <li onClick={()=> isClicked && closeMenu}><a href='/'>How it works</a></li>
                <li onClick={()=> isClicked && closeMenu}><a href='/'>About</a></li>
                <li onClick={()=> isClicked && closeMenu}><a href='/'>Contact us</a></li>
            </ul>
            <div className="NavButtons">
                <button>Login</button>
                <button className="SignUp">Sign Up</button>
            </div>
        </nav>
    );
}

export default Navlinks;