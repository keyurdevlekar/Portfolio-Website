function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Mark Creations. All rights reserved.</p>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;