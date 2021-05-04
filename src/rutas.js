import App from './App.vue'
import home from './components/home.vue'
import Vista_componentes from './components/vista_componentes.vue'
import Errors from './components/error.vue'
import completado from './components/completado.vue'


export const rutas =[
    {path: '/', redirect: '/home'},
    {path: '/home', component: home, name: 'Inicio'},
    {path: '/inicio_flujo', component: Vista_componentes, name: 'flujo_datos', props:true},
    {path: '/error', component: Errors, name: 'error'},
    {path: '/completado', component: completado, name: 'completado'},

];
