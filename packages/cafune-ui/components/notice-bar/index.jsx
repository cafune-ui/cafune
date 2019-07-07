import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';

const NoticeBar = ({ prefix, text, icon }) => {
  return <div className={prefix}><Icon icon={icon}/>{text}</div>;
};
NoticeBar.defaultProps = {
  prefix: 'caf-noticebar',
  scrollable: true,
  wrapable: false,
  icon: 'notice'
}
NoticeBar.propTypes = {
  /**
   * 自定义前缀
   */
  prefix: PropTypes.string,
  /**
   * 消息内容
   */
  text: PropTypes.string,
  /**
   * 是否启用滚动
   */
  scrollable: PropTypes.bool,
  /**
   * 是否自动换行（仅在不滚动时生效）
   */
  wrapable: PropTypes.bool,
  /**
   * 文本颜色
   */
  color: PropTypes.string,
  /**
   * 背景颜色
   */
  bgColor: PropTypes.string,
  /**
   * 左侧图标
   */
  icon: PropTypes.string,
  
};
export default NoticeBar;
