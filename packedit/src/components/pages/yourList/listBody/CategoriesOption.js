import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CategoriesOption(props) {
  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Categories"
          onChange={handleChange}
        >
            {props.categories.map((category)=>(
                <MenuItem id={category.id} value={category.id}>{category.name}</MenuItem>
            ))}
          {/* <MenuItem value={"documents"}>Documents</MenuItem>
          <MenuItem value={20}>ToDo</MenuItem>
          <MenuItem value={30}>Covid-19</MenuItem> */}
        </Select>
      </FormControl>

      {/* <div>{option}</div> */}
    </Box>
  );
}