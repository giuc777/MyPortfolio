import LogoArray from './logosSvg'
import { useState } from 'react'
const Social = LogoArray.Social
const Github = Social[0].component
const  Linkedin = Social[1].component
const Gmail = Social[2].component
const SocialNetworks = ({fill, height, ...props})=>{

    const [hover, setHover] = useState(null)
    

    return (
        <>
            <div {...props}>
                <a href="https://github.com/giuc777" onMouseEnter={()=>setHover(1)} onMouseLeave={()=>setHover(null)}><Github fill={hover == 1 ? '#fe4d37' : fill} height={height} style={{margin: '7px'}}/></a>
                <a href="https://www.linkedin.com/in/gadiel-us-a2a414283/" onMouseEnter={()=>setHover(2)} onMouseLeave={()=>setHover(null)}><Linkedin fill={hover == 2 ? '#fe4d37' : fill} height={height} style={{margin: '7px'}}/></a>
                <a href="mailto:gadyus18@gmail.com" onMouseEnter={()=>setHover(3)} onMouseLeave={()=>setHover(null)}><Gmail fill={hover == 3 ? '#fe4d37' : fill} height={height} style={{margin: '7px'}} /></a>
            </div>
        </>
    )
}

export default SocialNetworks