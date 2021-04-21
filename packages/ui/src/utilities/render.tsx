/** @jsx h */
import '../css/base.css'

import type { FunctionComponent } from 'preact'
import { h, render as preactRender } from 'preact'

export function render<Props>(Plugin: FunctionComponent<Props>) {
  return function (rootNode: HTMLElement, props: Props) {
    preactRender(<Plugin {...props} />, rootNode)
  }
}
