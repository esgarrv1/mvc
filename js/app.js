import { Controlador } from "./controllers/controlador.js";
import {Contador} from './models/contador.js'
import {ContadorView} from './views/contador-view.js';

const controlador = new Controlador(new Contador(), new ContadorView());