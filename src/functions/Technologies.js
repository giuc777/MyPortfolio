import LogoArray from '../componets/logosSvg'

const Technologies = LogoArray.LogoArray
const JavaScript = Technologies[0]
const react = Technologies[1]
const Php = Technologies[2]
const  Html = Technologies[3]
const Css = Technologies[4]
const Sass = Technologies[6]
const Bootstrap = Technologies[7]
const MariaDB = Technologies[8]
const Pug = Technologies[10]
const Ejs = Technologies[11]
const Express = Technologies[12]

const ListProject =[
    {name: 'Suma De Matrices', Use: [Pug, Sass, JavaScript], img: '/SumaMatrices.PNG',
    detail: 'Aplicación web desarrollada para la suma de Matrices', urlGithub: 'https://giuc777.github.io/AlgebraLinealProyectoMatrices/', deploy: 'https://github.com/giuc777/AlgebraLinealProyectoMatrices/settings/pages'},
    {name: 'YardSale', Use: [Html, Css, JavaScript], img: '/Yard.png',
    detail: 'Pagina dinamica de compras', urlGithub: 'https://github.com/giuc777/curso_practico_js', deploy: 'https://giuc777.github.io/curso_practico_js/'},
    {name: 'Crypfirm', Use: [Express, Ejs, Css, Bootstrap, MariaDB], img: '/crypfirm.PNG',
    detail: 'Aplicación web desarrollada para la verificación y creación de fimras electronicas.', urlGithub: 'https://github.com/giuc777/Crypfirm', deploy: 'https://github.com/giuc777/Crypfirm'}
]



export default ListProject