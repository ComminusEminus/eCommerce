const HiddenInput = ({ field, form, ...props }) => {
  return(
    <input
      {...field}
      {...props}
    />
  )
}

export default HiddenInput;
