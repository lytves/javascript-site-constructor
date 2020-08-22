import {colSm, row} from "./utils";

function title(block) {
    const {tag = 'h2', styles} = block.options
    return row(colSm(`
        <${tag}>${block.value}</${tag}>
    `), styles)
}

function text(block) {
    return row(colSm(`
        <p style="margin-bottom: 0;">${block.value}</p>
    `), block.options.styles)
}

function textColums(block) {
    const html = block.value.map(item => colSm(item))
    return row(html.join(''), block.options.styles)
}

function image(block) {
    const {alt, styles, imageStyles} = block.options
    const html = `<img src="${block.value}" alt="${alt}" style="${imageStyles}"/>`
    return row(html, styles)
}

export const templates = {
    text,
    textColums,
    title,
    image
}