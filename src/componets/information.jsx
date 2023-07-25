import logosSvg from "./logosSvg"

const Logos = logosSvg.LogoArray
const ReactSvg = Logos[1].component
const Css = Logos[4].component
const Bootstrap = Logos[7].component 

const Information = ()  =>{
    return(
        <>
            <h4 className="text-white title text-center">Technologies used</h4>
            <div className="d-flex justify-content-center">
                <ReactSvg fill='#171d42' height='40px'/>
                <Css fill='#171d42' height='40px'/>
                <Bootstrap fill='#171d42' height='40px'/>
            </div>
        </>
    )
}

export default Information