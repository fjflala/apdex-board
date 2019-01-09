import Component from '../../utils/component';

export default class List extends Component {
  getTopAppsByHost(hosts) {
    return hosts.slice(0, 25);
  }

  render() {
    const {
      data,
    } = this.props;

    return `<ul class="ui-list">
        ${this.getTopAppsByHost(data).map(host => (
          `<li class="ui-list__item" data-apdex="${host.apdex}">${host.name}</li>`
        )).join('')}
    </div>`;
  }
}