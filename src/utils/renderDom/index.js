/**
 * Module dependencies
 */
import Component from "../component";

/**
 * Helpers
 */
let componentMemory;
let targetMemory;

/**
 * renderDOM append the main component into the DOM
 * @param {Component} component - Main component
 * @param {HTMLElement} target - DOM target
 */
export default function renderDom(component = componentMemory, target = targetMemory) {
  if (!component || !target) {
    throw new Error('Should define component and target params');
  }
  
  target.innerHTML = '';
  target.appendChild(component.render());
  
  // Safe variables, will be used in Component
  if (!componentMemory) {
    componentMemory = component;
  }

  if (!targetMemory) {
    targetMemory = target;
  }
}