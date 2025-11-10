import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Grid from '@mui/material/Grid';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

//-----------------------------------------------

function BasicDateCalendar() {
  return (
    <Grid container >
      <Grid item xs={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar displayWeekNumber />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem >
            <DateCalendar
              defaultValue={dayjs('2022-04-17')}
              views={['month', 'year']}
              openTo="month"
            />
          </DemoItem>
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
}
export default BasicDateCalendar