import image from './assets/image.jpg'
import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from './classes/blocks'
import {css} from "./utils";

export const model = [
    new TitleBlock('CMS on pure JavaScript!', {
        tag: 'h2',
        styles: css({
            background: '#eb425e',
            color: '#fff',
            'text-align': 'center',
            padding: '0.5rem'
        })
    }),
    new TextColumnsBlock( [
        'Application on pure JavaScript without 3rd party frameworks',
        'Using SOLID principles',
        'Based on WebPack'
    ], {
        styles: css({
            padding: '2rem'
        })
    }),
    new TextBlock(
        '\'Learning JavaScript is fun and useful, be creative and modern frontend developer!\'',
        {
            styles: css({
                background: '#c7c5b9',
                color: '#2f2f2f',
                padding: '1rem'
            })
        }),
    new ImageBlock( image,
        {
            imageStyles: 'height: 200px;',
            alt: 'CMS on pure JavaScript!',
            styles: css({
                padding: '1rem',
                display: 'flex',
                'justify-content': 'center'
            })
        })
]