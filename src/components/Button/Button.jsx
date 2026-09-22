import styles from './Button.module.css'

/**
 * The only two button shapes on the site.
 * variant="primary"   the one action we want
 * variant="secondary" the softer step
 */
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'default',
  fullOnMobile = true,
  as,
  ...rest
}) {
  // A link by default, a real button when it has to submit a form.
  const Tag = as === 'button' || !href ? 'button' : 'a'
  const className = [
    styles.btn,
    styles[variant],
    size === 'small' ? styles.small : '',
    fullOnMobile ? styles.fullOnMobile : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={className} href={Tag === 'a' ? href : undefined} {...rest}>
      {children}
    </Tag>
  )
}
