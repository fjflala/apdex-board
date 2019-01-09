export default function renderDom(component, target) {
  target.innerHTML = component.render();
}