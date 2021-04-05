import * as React from 'react'
import classNames from 'classnames'
import styles from './ReactMultiToogle.module.css'
import { ReactMultiToogleIcon } from '../Icon/Icon'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface MultiToogleOption {
  value: string
  title?: string
  icon: IconDefinition
}

export enum MultiToogleSize {
  small = 'small',
  large = 'large'
}

interface Props {
  name: string
  size?: string
  options: MultiToogleOption[]
  value?: string
  onClick?: (value: string) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  className?: string
}

export const ReactMultiToogle = (props: Props) => {
  const [hasFocus, setHasFocus] = React.useState(false)
  const [checked, setChecked] = React.useState(0)

  React.useEffect(() => {
    let found = 0
    options.filter((op, i) => {
      if (op.value === props.value) {
        found = i
        return true
      }
      return false
    })
    setChecked(found)
  }, [props.value])

  const {
    className,
    name,
    onFocus,
    onClick,
    onBlur,
    size,
    disabled,
    options,
    ...inputProps
  } = props

  const handleClick = (option: MultiToogleOption, index: number) => {
    if (disabled) {
      return
    }
    if (onClick) {
      onClick(option.value)
    }
    setChecked(index)
  }

  const handleTouchStart = () => {
    // @todo
  }

  const handleTouchMove = () => {
    // @todo
  }

  const handleTouchEnd = () => {
    // @todo
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(event)
    }

    setHasFocus(true)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event)
    }

    setHasFocus(false)
  }

  const classes = classNames(
    styles['react-toggle'],
    {
      [styles['react-toggle--checked']]: true,
      [styles['react-toggle--focus']]: hasFocus,
      [styles['react-toggle--disabled']]: disabled,
      [styles['react-toggle--large']]: size === MultiToogleSize.large
    },
    className
  )

  const calc = size === MultiToogleSize.large ? '41px' : '31px'

  return (
    <div
      className={classes}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles['react-toggle-track']}>
        {options.map((option: MultiToogleOption, i) => (
          <div
            onClick={() => handleClick(option, i)}
            key={i}
            className={styles['react-toggle-track-check']}
          >
            <ReactMultiToogleIcon
              currentIcon={option.icon}
              checked={checked === i}
            />
          </div>
        ))}
      </div>
      <div
        className={styles['react-toggle-thumb']}
        style={{ left: 'calc( ' + calc + ' * ' + checked + ' + 1px)' }}
      />
      {options.map((_option: MultiToogleOption, i) => (
        <input
          key={i}
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={styles['react-toggle-screenreader-only']}
          type='radio'
          {...inputProps}
        />
      ))}
    </div>
  )
}
