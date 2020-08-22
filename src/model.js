import image from './assets/image.jpg'

export const model = [
    {
        type: 'title', value: 'CMS on pure JavaScript!', options: {
            tag: 'h2',
            styles: 'background: #eb425e; color: #fff; text-align: center; padding: 0.5rem'
        }
    },
    {
        type: 'textColums', value: [
            'Application on pure JavaScript without 3rd party frameworks',
            'Using SOLID principles',
            'Based on WebPack'
        ], options: {
            styles: 'padding: 1rem;'
        }
    },
    {
        type: 'text',
        value: 'Learning JavaScript is fun and useful, be creative and modern frontend developer!',
        options: {
            styles: 'background: #f5f5f5; color: #2f2f2f; padding: 1rem;'
        }
    },
    {
        type: 'image', value: image,
        options: {
            styles: 'padding: 1rem; display: flex; justify-content: center;',
            imageStyles: 'height: 200px;',
            alt: 'CMS on pure JavaScript!'
        }
    }
]