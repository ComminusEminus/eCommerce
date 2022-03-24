import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const SelectOptionComponent = (props) => {
  const {id, name, label, labelId, values, handleChange, touched, errors, product} = props;
  return (
    <>
      <FormControl sx={{ width: "90%", mb: 2}}>
        <InputLabel id={labelId}>Options</InputLabel>
        <Select
          labelId={labelId}
          id= {id} //change to id
          name = {name} //change to name
          value= {values} //add values
          onChange = {handleChange} //add handle change
          error = {touched && Boolean(errors)} //add touched and error

          input={<OutlinedInput label= {label} />}
        >
          { //add product.options as prop being passed
            product.map((option) => (
              <MenuItem
                key={option}
                value={option}
              >
                {option}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </>
  )
}

export default SelectOptionComponent;
