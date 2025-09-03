type TextLinkProps = {
  href: string
  children: string
  target?: string
  className?: string
}

/** A basic text link, made into a component so we can reuse the styling logic.
 * Anchor instead of Next Link because 🤷‍♂️.
 */
const TextLink = ({ href, className, target, children }: TextLinkProps) => {
  return (
    <a href={href} className={`text-blue-700 dark:text-yellow-500 hover:underline ${className}`} target={target}>
      {children}
    </a>
  )
}

export default TextLink
