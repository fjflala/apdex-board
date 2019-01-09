import Component from '../../utils/component';

export default class Card extends Component {
  render() {
    const {
      children,
    } = this.props;

    return `<div class="ui-card">
      <div class="contenido">
        ${children.render()}
      </div>
    </div>`;
  }
}