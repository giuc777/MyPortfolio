import '../estilos/Carrousel.css'
import LogoArray from './logosSvg'
import { useState, useEffect } from 'react'
import Card from './CardCarrousel'
import ListProject from '../functions/Technologies'


const PreviusArrow = LogoArray.UseCard[2].component
const NextsArrow = LogoArray.UseCard[3].component




const Carrousel= ()=>{

//states
  const [hover, setHover] = useState(null)
  const[start, setStart] = useState(0)
  const[end, setEnd] = useState(2)
  const [isLoading, setIsLoading] = useState(true);


//Effects
  useEffect(()=>{
    const delay = 500; // Tiempo de carga simulado en milisegundos

    if(isLoading == false){
      setIsLoading(true)
    }

    // Simulación de tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Limpieza del temporizador en la desmontada del componente
    return () => clearTimeout(timer);
  }, [start, end])

//funtcions
const advance= ()=>{
  setStart(start + 1)
  setEnd(end + 1)
 

}

const moveLocation =(index)=>{
  setStart(index)
  setEnd(index + 2)
}

const back = ()=>{
  setStart(start - 1)
  setEnd(end - 1)
}

//components
const location = () => {
  const divs = ListProject.slice(0, ListProject.length - 1).map((item, index) => (
    <div
      key={index}
      style={{
        borderRadius: '10px',
        height: start == index ? '20px': '10px',
        width: '40px',
        backgroundColor: start == index ? 'white': 'black',
        margin: '5px'
      }}
      onClick={()=>moveLocation(index)}
      className='hover'
    ></div>
  ));

  return divs;
};

//component
    return (
        <>
        <section className=''>
        <article className='d-flex justify-content-center'>
        <span style={{margin: '0', heigth: '80px', width:'80px'}} className='d-flex justify-content-center align-items-center'>
          {start == 0 ? '': 
          <button className='button-Arrow' onClick={back}  
          onMouseEnter={()=>setHover(1)} onMouseLeave={()=>setHover(null)}>
            <PreviusArrow fill={hover == 1 ? 'white': '#fe4d37'} style={{heigth: '80px', width:'80px'}}/>
          </button>}
        </span>
        {ListProject.slice(start, end).map((proyect, index)=>{
         return <Card img={isLoading ? '...': proyect.img} title={proyect.name} descript={proyect.detail} key={index} 
          placeholder={isLoading ? 'placeholder replite-glow': ''} createDiv={isLoading ? 'Create-Div' : ''} gitLink={proyect.urlGithub} deplyLink={proyect.deploy}
          Technologies={isLoading ? '':
            proyect.Use.map((technology, index)=>{
            return <technology.component fill={technology.color} key={index} style={{minWidth: '50px', maxWidth: '50px', margin: '5px'}}/> 
          })}/>
        })}
        <span span style={{margin: '0', heigth: '80px', width:'80px'}} className='d-flex justify-content-center align-items-center'>
        {ListProject.length  == end ? '': 
        <button className='button-Arrow' onClick={advance}
        onMouseEnter={()=>setHover(2)} onMouseLeave={()=>setHover(null)}>
          <NextsArrow fill={hover == 2 ? 'white': '#fe4d37'} style={{heigth: '80px', width:'80px'}}/>
        </button>}
        </span>
        </article>
        <div style={{marginBlockStart: '20px'}} className='d-flex justify-content-center'>
        {location()}
        </div>
        </section>

        </>
    )
}
//div de 6
export default Carrousel