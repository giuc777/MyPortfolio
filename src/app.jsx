import './estilos/inicio.css'
import { useEffect, useState } from 'react'
import  LogoArray  from './componets/logosSvg';
import ButtonSwitch from './componets/ButtonSwitch.jsx'
import GraficoLogo from './componets/grafico';
import Carrousel from './componets/Carrousel';
import Header from './componets/Header';
import Footer from './componets/footer';


export function App(){
//cambiar color logos
const [hoveredLogo, setHoveredLogo] = useState(null);

//Ver si el Switch es true o false 
const[statistics,setStatistics ] = useState(false)




//para movil
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



//funciones
const handleToggle = () => {
  setStatistics(!statistics);
};

//constantes
const List = LogoArray.LogoArray

    return(
        <main>
        <Header/>
        <section id='skills' style={{height: 'auto', paddingBlockEnd: '20px'}} className='bg-black section1'>
            <h1 className='text-white title' style={{paddingTop: '40px'}}>Skills</h1>
            <ButtonSwitch className='d-flex justify-content-center' onChange={handleToggle}/>
            <article className='container-fluid justify-content-center row'>
              { statistics == true 
                ? <GraficoLogo/> 
                : List.map((logo, index)=>(
                    <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"  onMouseEnter={() => setHoveredLogo(index)} onMouseLeave={()=> setHoveredLogo(null)}>
                      <div className={`card d-flex align-items-center ${hoveredLogo === index ? 'boxRotate' : ''}`} style={{ backgroundColor: 'black', maxWidth: '100px' }}>
                        <logo.component fill={hoveredLogo === index ? logo.color : '#fe4d37'} className="img-fluid" style={{ minWidth: '100px'}} />
                        <div className="" style={{color: hoveredLogo === index ? logo.color : '#fe4d37'}}>
                          <p className="h4">{logo.name}</p>
                        </div>
                      </div>
                    </div>
                  ))

              }
            </article>
            

        </section>

        <section className='project section2' id='projects'>
          <article className='container-fluid'>
            <h1 className='title text-white'>Projects</h1>
            {isMobile ? '': (
              <Carrousel/>
            )}
          </article>
        </section>

        <Footer />
        

        </main>
        
    )
}