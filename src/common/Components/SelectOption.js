import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const SelectOption = ({ id, name, label, labelId, value, handleChange, touched, errors, options}) => {

  return (
    <>
      <FormControl sx={{ width: "100%", mb: 2}}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          id= {id}
          name = {name}
          value= {value}
          onChange = {handleChange}
          error = {touched && Boolean(errors)} 
          input={<OutlinedInput label= {label} />}
        >
          {
            options.map((option) => (
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
export default SelectOption
