import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/Bemonn" aria-label="Github">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/tristan-brennan-0257b728b/" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </footer>
  );
}

export default Footer;