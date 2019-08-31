import { Icon } from 'cafune';
import logImg from '../../assets/Cafune.png';
const Header = ({ toggleStatus }) => {
  return (
    <h1 class="caf-doc-head">
      <span class="head-icon head-icon__menu" onClick={toggleStatus('shownav')}>
        <Icon icon="menu" size="20px" />
      </span>
      <div class="head-bar">
        <img src={logImg} class="head-bar-logo" />
      </div>
      <a
        class="head-icon head-icon__github"
        href="https://github.com/cafune-ui/cafune/"
        alt="cafune"
        target="__blank"
      />
      <span
        class="head-icon head-icon__code"
        onClick={toggleStatus('showcode')}
      >
        <Icon icon="more" size="20px" />
      </span>
    </h1>
  );
};

export default Header;
