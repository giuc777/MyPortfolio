import SocialNetworks from "./SocialNetworks";
import { useEffect, useState } from 'react'
const Header = ()=>{
    //states
    const [text, setText] = useState('')
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const messages = ['<Web developer>', 'In code we trust', 'Code is poetry']
    const typingSpeed = 200; // Velocidad de escritura en milisegundos
    const deletingSpeed = 100; // Velocidad de borrado en milisegundos


    const shouldTranslate = false; // Cambia a 'false' si deseas evitar la traducción

    //useEfects
    useEffect(() => {
      let currentMessageIndex = 0;
      let currentTextIndex = 0;
      let isDeleting = false;
      let typingTimeout;
  
      const type = () => {
          const currentMessage = messages[currentMessageIndex]
          if (isDeleting) {
            setText(currentMessage.substring(0, currentTextIndex - 1))
          } else {
            setText(currentMessage.substring(0, currentTextIndex + 1))
          }
        
          if (!isDeleting && currentTextIndex === currentMessage.length) {
            isDeleting = true;
            typingTimeout = setTimeout(type, deletingSpeed);
          } else if (isDeleting && currentTextIndex === 0) {
            isDeleting = false;
            currentMessageIndex = (currentMessageIndex + 1) % messages.length
            typingTimeout = setTimeout(type, typingSpeed);
          } else {
            typingTimeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed)
          }
        
          currentTextIndex = isDeleting ? currentTextIndex - 1 : currentTextIndex + 1
        };
        if (shouldTranslate) {
            currentMessage = translations[currentMessageIndex][currentLanguage];
          }
      
        typingTimeout = setTimeout(type, typingSpeed);
      
        return () => {
          clearTimeout(typingTimeout)
        }
      }, [])    
    
    //mobile
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    
    
    return(
        <div className="bg-image header" style={{backgroundImage: 'url(./background-header.webp)', height: '100vh', backgroundSize: 'cover'}}>
          <nav className="navbar navbar-expand-lg bg-black navbar-dark">
            <div className="container-fluid justify-content-center">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item text_Montserrat">
                    <a className="nav-link navbar-brand text-white" aria-current="page" href="mailto:gadyus18@gmail.com">Contact</a>
                  </li>
                  <li className="nav-item text_Montserrat">
                    <a className="nav-link navbar-brand text-white" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item text_Montserrat">
                    <a className="nav-link navbar-brand text-white" href='#projects'>Projects</a>
                  </li>
                </ul>
                <ul style={{listStyle: 'none'}}>
                  <li><SocialNetworks fill='white' height='40px'/></li>
                </ul>
              </div>
            </div>
          </nav>
          <header className='d-flex align-items-center'>
            <section className="text-white container text-center" style={{ height: '50vh', width: isMobile ? '10wh': '80vh', backgroundSize: 'cover' }}>
              <h1 className="title display-2 text-white">Gadiel Us</h1>
              <div className="subtitle_header" style={{marginBlockEnd: isMobile ? '8vh' : '20vh', marginBlockStart: isMobile ? '5vh' : '10vh'}}>
                <span className={isMobile ? 'lettreIsMobie' : 'display-6'}>
                My user-centric approach and attention to detail allow me to design intuitive, eye-pleasing web interfaces
                </span>
              </div>
              <h2 className="text-white title display-4">{text}<span className="blinking-letter">|</span></h2>
            </section>
          </header>
        </div>
    )
}

export default Header