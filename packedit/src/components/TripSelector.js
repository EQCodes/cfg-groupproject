import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TripSelector(props) {
  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
    props.updateTheTrip(event.target.value);
  };



  return (
    <Box sx={{ minWidth: 50}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Trips</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Categories"
          onChange={handleChange}
        >
            {props.trips.map((trip)=>(
                <MenuItem id={trip.id} value={trip.id}>{trip.ListName} To: {trip.Destination}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}