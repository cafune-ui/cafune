import { Icon } from 'cafune';
const Header = ({ toggleStatus }) => {
  return (
    <h1 class="caf-doc-head">
      <span class="head-icon head-icon__menu" onClick={toggleStatus('shownav')}>
        <Icon icon="menu" size="20px" />
      </span>
      <div class="head-bar">
        <img src="/assets/Cafune.png" class="head-bar-logo" />
      </div>
      <a
        class="head-icon head-icon__github"
        href="https://github.com/evont/preact-cafune/"
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
