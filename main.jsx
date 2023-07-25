import {createRoot} from 'react-dom/client'
import { App } from './src/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import './src/estilos/index.css'



const root = createRoot(document.querySelector('#app'))

root.render(<App/>)
 

