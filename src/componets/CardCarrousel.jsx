import LogoArray from './logosSvg'
import { useState } from 'react'

const List = LogoArray.UseCard
const LogoGithub = List[0].component
const Share = List[1].component

const ListLogos = LogoArray.LogoArray
const Node = ListLogos[0].component
const ReactLogo = ListLogos[1]
const Bootstrap = ListLogos[4]
const MariaDB = ListLogos[5]



export default function Card({img,alt, title,descript,Technologies, placeholder, createDiv, divTechnologies, gitLink, deplyLink, ...props}){
    
const [select, setSelect] = useState(null)


    return(
        <div className="card" style={{width: '27rem', backgroundColor: 'black', marginInlineStart: '20px'}} {...props}>
          <img src={img} className={`${placeholder} ${createDiv}`} alt={alt}  />
          <div className="card-body">
          <div style={{height: '9.5rem'}}>
          <h4 className={`title ${placeholder}`}>{title}</h4>
          <p className={`card-text text_Montserrat ${placeholder}`}>
            {descript}</p>
          </div>
            <article>
              <h5 className='title' style={{ fontWeight: '300' }}>Technologies used</h5>
              <section className={`row justify-content-center `}>
                <div className={`justify-content-center `}>
                  <div className={`d-flex justify-content-center ${placeholder}`} style={{marginBlockEnd: '20px'}}>
                    {Technologies}
                  </div>
                </div>
              </section>
            </article>

            <div className='d-inline-flex align-items-center align-self-end' 
            style={{backgroundColor: 'transparent'}}>
              <button className='btn d-inline-flex align-items-center' onClick={() => window.location.href = gitLink}
              style={{width: '9rem', height:'3rem', paddingInlineStart: '3px', paddingInlineEnd:'0', marginInlineEnd: '5rem'}}
              onMouseEnter={()=>setSelect(1)} onMouseLeave={()=>setSelect(null)} >
              <span style={{color: select == 1 ? '#171d42': 'white', fontWeight: '500'}} className='text_Montserrat'>Repository</span>
              <LogoGithub fill={select == 1 ? '#171d42':'white'}  style={{Width: '15px', height: '40px',marginInlineStart: '5px'}} className="img-fluid"/>
              </button>
              <button className='btn d-inline-flex align-items-center' onClick={() => window.location.href = deplyLink}
              style={{width: '9rem', height:'3rem'}}
              onMouseEnter={()=>setSelect(2)} onMouseLeave={()=>setSelect(null)}>
                <span style={{color: select == 2 ? '#171d42': 'white', fontWeight: '500'}} className='text_Montserrat'>Deploy</span>
                <Share fill={select == 2 ? '#171d42':'white'}  style={{Width: '15px', height: '50px',marginInlineStart: '0'}}/>
              </button>
              </div>
          </div>
        </div>
    )
}