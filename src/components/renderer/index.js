import { createElement } from 'react';
import Div from '../Div';
import P from "../P";
import Image from "../Image"
import Li from '../Li';
import H5 from './H5';
import Anchor from '../Anchor';

const keysToComponentMap = {
    div: Div,
    p: P,
    h5: H5,
    a: Anchor,
    li: Li,
    img: Image,
};

const stylesMap = (styles) => {
    let mappedStyles = {};
    styles?.forEach((style) => {
        mappedStyles[style.name] = style.value;
    });
    return mappedStyles;
};

export const renderComponent = (config) => {
    if (typeof keysToComponentMap[config.component] !== 'undefined') {

        return createElement(
            keysToComponentMap[config.component],
            {
                id: config.id ? config.id : null,
                key: config.id,
                className: config.className ? config.className : null,
                style: config.styles ? stylesMap(config.styles) : null,
                src: config.src ? config.src : null,
                onClick: (element) => { console.log(element); }
            },
            config.children &&
            (typeof config.children === 'string'
                ? config.children
                : config.children.map((c) => renderComponent(c)))
        );
    }
};
