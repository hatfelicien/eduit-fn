declare module "react-scroll" {
  import * as React from "react"

  interface LinkProps {
    to: string
    spy?: boolean
    smooth?: boolean
    offset?: number
    duration?: number
    delay?: number
    isDynamic?: boolean
    containerId?: string
    className?: string
    activeClass?: string
    onClick?: () => void
    children?: React.ReactNode
  }

  interface ScrollProps {
    scrollToTop: () => void
    scrollTo: (target: string | number) => void
    scrollToBottom: () => void
    scrollMore: (pixels: number) => void
  }

  export class Link extends React.Component<LinkProps> {}

  export const Element: React.FC<{
    name: string
    className?: string
    id?: string
    style?: React.CSSProperties
    children?: React.ReactNode
  }>

  export const scroller: {
    scrollTo: (name: string, options?: object) => void
    scrollToBottom: (options?: object) => void
    scrollToTop: (options?: object) => void
    scrollMore: (pixels: number, options?: object) => void
  }

  export const animateScroll: {
    scrollToTop: (options?: object) => void
    scrollToBottom: (options?: object) => void
    scrollTo: (y: number, options?: object) => void
    scrollMore: (pixels: number, options?: object) => void
  }

  export const Events: {
    scrollEvent: {
      register: (name: string, callback: () => void) => void
      remove: (name: string) => void
    }
  }
}
