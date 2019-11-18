/** @jsx h */
import { h } from 'preact'
import styles from './container.scss'

export function Container (props) {
  return <div {...props} class={styles.container} />
}