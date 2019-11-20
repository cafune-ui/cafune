import preact from 'preact';

// declare module '*.svg'
// declare module '*.png'
// declare module '*.jpg'
// declare module '*.jpeg'
// declare module '*.gif'
// declare module '*.bmp'
// declare module '*.tiff'
// declare module '*.scss'
// declare module '*.css'

interface EventHandler<E extends Event> {
  (event: E): void;
}
type EventHandlers<E extends Event> = EventHandler<E>;

export type Component<P = {}, S = {}, SS = any> = preact.Component<P, S>;
export type ReactElement<P = {}, S = any> = preact.VNode<P>;
// export import FunctionComponent = preact.FunctionComponent;
// export import ComponentClass = preact.ComponentClass;
// export import ComponentType = preact.ComponentType;
// export import Context = preact.Context;
export type ReactNode = preact.ComponentChildren;
export type CSSProperties = string | { [key: string]: string | number };
export type AllHTMLAttributes<T> = JSX.HTMLAttributes;
