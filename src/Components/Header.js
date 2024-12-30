import {BiSolidUser} from 'react-icons/bi';

const Header = () => {
    return (
        <main className="Header">
            <p>LOGO</p>
            <ul>
                <li>Home</li>
                <li>How it works</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            <span>
                <button><BiSolidUser />Login/Sign up</button>
            </span>
        </main>
    );
}

export default Header;