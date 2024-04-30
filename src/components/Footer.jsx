import { GitHub, Facebook, Twitter, LinkedIn, Instagram } from "@material-ui/icons";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="socialMedia">
        <a
          href="https://github.com/sanjay18257"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        <a
          href="https://www.instagram.com/_xade._?igsh=MWZsc2Q4a2Z2djhmZQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>

        <a
          href="https://www.twitter.com/_xade.__"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="https://www.linkedin.com/in/sanjay-s-1a9719239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </section>

      <p>&copy; 2024 codeatsanjay</p>
    </footer>
  );
};

export default Footer;
