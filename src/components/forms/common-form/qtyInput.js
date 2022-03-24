import TextField from '@mui/material/TextField';


const QtyInput = (props) => {
  const {id, name, label, values, handleChange, touched, errors} = props;
  return (
    <>
      <TextField
        id = {id} //"qty"
        name = {name}//"qty"
        label= {label} //"Quantity"
        value = {values} //{values.qty}
        onChange = {handleChange}
        error = {touched && Boolean(errors)} //{touched.qty && Boolean(errors.qty)}
        helperText = {touched && errors} //{touched.qty && errors.qty}
        sx = {{width: '90%'}}
      />
    </>
  )
}


export default QtyInput;
