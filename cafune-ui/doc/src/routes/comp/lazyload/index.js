import { Lazyload } from 'cafune';
import { Component } from 'preact';
import './style';
export default class LazyLoadComp extends Component {
  render() {
    return (
      <Lazyload imgClass="lazy">
        {Array(...Array(20)).map((_, ind) => (
          <div class="caf-demo-image" key={ind}>
            <img
              src="http://fpoimg.com/200x150?text=loading"
              data-src="http://fpoimg.com/200x150?text=original"
              class="lazy"
              style="width: 200px;height: 150px;"
            />
          </div>
        ))}
      </Lazyload>
    );
  }
}
