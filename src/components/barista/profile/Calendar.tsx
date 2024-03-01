import { styled } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
// import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

const Calendar = () => {
  const param = useParams()

  console.log(param, 'param')
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateCalendar']}>
          <StyledDemoItem>
            <StyledDateCalendar defaultValue={dayjs()} readOnly showDaysOutsideCurrentMonth fixedWeekNumber={5} />
          </StyledDemoItem>
          {/* <DateCalendar
            referenceDate={dayjs()}
            views={['year', 'month', 'day']}
          /> */}
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;

const StyledDemoItem = styled(DemoItem)(() => ({
  background: 'black',
}));

const StyledDateCalendar = styled(DateCalendar)(() => ({
  '.MuiDayCalendar-weekContainer': {
    // background: 'red',
  },
  '.MuiPickersCalendarHeader-root': {
    display: 'none',
  },
  '.MuiDayCalendar-header': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.MuiPickersDay-root': {
    background: '#8876C5',
    borderRadius: '5px',
    padding: '15px',
    margin: '5px',
    color: 'white',
  },
  '.MuiPickersDay-root.Mui-selected': {
    background: '#FF8B5B',
    padding: '20px',
    borderRadius: '5px',
    margin: '3px',
  },
  '.MuiPickersSlideTransition-root': {
    overflowX: 'clip',
  },
}));
