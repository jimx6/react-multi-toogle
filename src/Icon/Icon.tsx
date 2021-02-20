import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import styles from './Icon.module.css'

export function ReactMultiToogleIcon({
  currentIcon,
  checked
}: {
  currentIcon: IconDefinition
  checked: boolean
}) {
  return (
    <div
      className={`${styles.icon} ${
        checked ? styles.iconChecked : styles.iconUnchecked
      }`}
    >
      <FontAwesomeIcon icon={currentIcon} size='lg' />
    </div>
  )
}
