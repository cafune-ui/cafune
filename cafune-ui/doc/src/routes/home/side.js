import { Component } from 'preact';
import cx from 'classnames';
import compMap from '../../comp-type';

export default class Side extends Component {
  renderSide() {
    const { compInfo, name } = this.props;
    const mainNav = [];
    for (const i in compMap) {
      const item = compMap[i];
      const { prefix, list } = item;
      const isComps = prefix === 'components';
      const navItem = (
        <div class="nav">
          <h3 class="nav-head">{item.name}</h3>
          {list.map((ele, key) => (
            <div class="nav-block" key={key}>
              {ele.name && <p class="nav-name">{ele.name}</p>}
              {ele.list.map(comp => {
                if ((isComps && compInfo[comp.url]) || !isComps) {
                  return (
                    <a
                      class={cx('nav-item', {
                        'nav-item__actived': comp.url === name
                      })}
                      href={`/${prefix}/${comp.url}`}
                      key={comp.url}
                    >
                      {isComps
                        ? // eslint-disable-next-line prettier/prettier
                          `${compInfo[comp.url].displayName} - ${
                            compInfo[comp.url].desc
                          }`
                        : comp.name}
                    </a>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
      );
      mainNav.push(navItem);
    }
    return <div class="caf-doc-side-wrapper">{mainNav}</div>;
  }
  render({ shownav, toggleStatus }) {
    return (
      <div class="caf-doc-side" data-status={shownav ? 1 : 0}>
        <div class="caf-doc-side-mask" onClick={toggleStatus('shownav')} />
        {this.renderSide()}
      </div>
    );
  }
}
