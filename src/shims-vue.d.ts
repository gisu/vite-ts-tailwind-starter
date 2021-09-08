/* eslint-disable import/no-duplicates */

declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import { Component } from 'vue'
  const _default: Component
  export default _default
}
