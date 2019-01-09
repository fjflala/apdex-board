import Component from '../../utils/component';

export default class List extends Component {
  render() {
    const {
      hostName,
    } = this.props;
    return `<div class="ui-list">
      <div class="contenido">
        ${hostName}
      </div>
    </div>`;
  }
}