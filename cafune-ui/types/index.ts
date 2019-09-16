declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.scss'
declare module '*.css'

interface EventHandler<E extends Event> {
  (event: E): void;
}
type EventHandlers<E extends Event> = EventHandler<E>;