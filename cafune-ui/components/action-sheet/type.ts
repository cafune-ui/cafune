export interface iOption {
  /**
   * 单元项目图标
   */
  icon?: string;
  /**
   * 图标尺寸
   */
  iconSize?: string;
  /**
   * 单元名称
   */
  name: string;
  /**
   * 单元描述（横向数据中不展示）
   */
  subName?: string;
  /**
   * 小徽标，当为`true` 时显示空小圆点，当为`string`类型时显示带内容的小圆点
   */
  badge?: string | boolean;
  /**
   * 对齐方式，当无icon时默认为`center`, 有icon时则默认为`left`
   */
  align?: 'left' | 'center' | 'right';
  /**
   * 是否禁用此选项
   */
  isDisabled?: boolean;
  /**
   * 是否处于加载状态
   */
  isLoading?: boolean;
  /**
   * 点击时的反馈，如果为`string`时，视为链接，如为
   */
  action?: String | Function;
}

export interface IHorizon {
  list: iOption[];
  wrap: boolean;
}
export interface IActionSheet {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 元素类名
   */
  className?: string;
  /**
   * 面板开启状态
   */
  isShow: boolean;
  /**
   * 是否显示遮罩
   */
  showMask?: boolean;
  /**
   * 是否在点击遮罩后关闭
   */
  closeOnClickMask?: boolean;
  /**
   * 横向展示的数据
   */
  horizon: IHorizon;
  /**
   * 纵向展示的数据
   */
  vertialList: iOption[];
  /**
   * 标题栏
   */
  title?: any;
  /**
   * 取消按钮文字
   */
  cancelText?: string;
  /**
   * 关闭时触发事件
   */
  onClose?: Function;
  /**
   *  开启时触发事件*/
  onOpen?: Function;
  /**
   * 是否显示取消按钮
   */
  showCancel?: boolean;
}
