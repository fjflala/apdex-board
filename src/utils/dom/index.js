/**
 * Module dependencies
 */
import Component from "../component";

const handlerChildren = (child, fragment) => {
  if (child) {
    if (
      child instanceof HTMLElement ||
      child instanceof SVGElement ||
      child instanceof Comment ||
      child instanceof DocumentFragment
    ) {
      fragment.appendChild(child)
    } else if (typeof child === 'string' || typeof child === 'number') {
      const textnode = document.createTextNode(child)
      fragment.appendChild(textnode)
    } else if (child instanceof Array) {
      child.forEach(child => handlerChildren(child, fragment))
    } else if (child === false || child === null) {
      const textnode = document.createTextNode('')
      fragment.appendChild(textnode)
    } else if (
      typeof child === 'function' || 
      child.render || 
      child instanceof Component
    ) {
      fragment.appendChild(child.render());
    } else if (process.env.NODE_ENV === 'development') {
      console.error(child, 'Is not a Node element')
    }
  }
};

export default {
  createElement: function createElement(tagName, attr = {}, ...children) {
    if (typeof tagName === 'function') {
      return new tagName(attr, children);
    } else if (tagName instanceof HTMLElement) {
      return tagName;
    }

    const element = document.createElement(tagName);
    
    if (children && Array.isArray(children)) {
      const fragment = document.createDocumentFragment();
      children.forEach(child => handlerChildren(child, fragment));
      element.appendChild(fragment);
    }

    Object.keys(attr).forEach(prop => {
      if (prop === 'className') {
        element.setAttribute('class', attr[prop])
      } else if(prop.startsWith('on')) {
        const evt = prop.slice(2).toLowerCase();
        element.removeEventListener(evt, attr[prop]);
        element.addEventListener(evt, attr[prop]);
        element.listeners = element.listeners ? 
          [...element.listeners, { evt, cb: attr[prop]}] : 
          [{ evt, cb: attr[prop]}];
      } else {
        element.setAttribute(prop, attr[prop]);
      }
    });
  

    return element;
  },
};
