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
              src="https://via.placeholder.com/200x150.png?text=playholder"
              data-src="https://via.placeholder.com/200x150.png?text=original"
              class="lazy"
            />
          </div>
        ))}
      </Lazyload>
    );
  }
}
