import SocialLink from './SocialLink';

function Hero() {

  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/keyurdevlekar", 
      checked: true
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/keyur-devlekar-102929263/", 
      checked: true
    }
  ];

  return (
    <section id="home" className="hero">
      <h2>Hey there!</h2>
      <h1>I'm Keyur Devlekar</h1>
      <p className="email">keyurdevlekar10@gmail.com</p>
      
      <div className="social-links">
        {socialLinks.map((social) => (
          <a 
            key={social.platform}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link-wrapper"
          >
            <SocialLink 
              platform={social.platform} 
              checked={social.checked} 
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Hero;