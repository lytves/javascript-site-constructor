import {model} from "./model";
import './styles/main.css'

const site = document.getElementById("site");

model.forEach((block) => {
    console.warn(block);
    site.insertAdjacentHTML('beforeend', block.toHTML())
})
