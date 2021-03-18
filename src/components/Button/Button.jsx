export const Button = ({ onClick, children, type }) => {
  return (
    <button onClick={onClick} type={type} className="waves-effect waves-light btn">{children}</button>
  )
}
