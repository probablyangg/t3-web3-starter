// tailwind styles
const basic = `p-2 rounded-md cursor-default`
const hover = `transform transition duration-500 hover:scale-[1.05]`


// component
const Button = ({
  title,
  onClick,
  className,
  disabled,
  hoverEffect=true
}: {
  title: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean
  hoverEffect?: boolean;
}) => {
  let look;
  if (!disabled) {
    look = `
      ${onClick ? "cursor-pointer" : ""}
      ${className || " "}
      ${basic}
      ${hoverEffect ? hover : ""}
    `
  }
  if (disabled) {
    look = `
      ${className || ""}
      ${basic}
      bg-disabled text-disabled-text
    `
  }
  return (
    <button className={look} onClick={onClick} disabled>
      {title}
    </button>
  )
}

export default Button;
