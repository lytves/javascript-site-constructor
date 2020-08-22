import {model} from "./model";
import './styles/main.css'
import {templates} from "./templates";

const site = document.getElementById("site");

model.forEach((block) => {
    let generate = templates[block.type]
    console.warn(block);
    if (generate) {
        const html = generate(block)
        site.insertAdjacentHTML('beforeend', html)
    } else {
        console.warn('faileddd');
    }
})
