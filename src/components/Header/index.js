import './style.scss';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className="Header bg-primary">
      <h3>Made with 💙 by Emilyn Pieritz</h3>

      <div className='Header__socials'>
        <a href="https://www.instagram.com/ecpieritz">
          <FaInstagram size="25px" className='fill-dark-primary' />
        </a>
        <a href="https://www.instagram.com/ecpieritz">
          <FaGithub size="25px" className='fill-dark-primary' />
        </a>
        <a href="https://www.instagram.com/ecpieritz">
          <FaLinkedin size="25px" className='fill-dark-primary' />
        </a>
      </div>
    </div>
  );
}

export default Header;
