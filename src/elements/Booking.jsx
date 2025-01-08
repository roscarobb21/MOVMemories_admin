import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import dayjs from 'dayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import './Booking.css'

function Booking(lang)
{
    const calendarStyle={
        ".MuiPickersToolbar-root": {
          color: "#343a40",
          borderRadius: "2px",
          borderWidth: "1px",
          borderColor: "#343a40",
          border: "1px solid",
          backgroundColor: "#343a40",
        },
        ".MuiDateCalendar-root": {
          color: "#343a40",
          borderRadius: "2px",
          borderWidth: "1px",
          borderColor: "#343a40",
          border: "1px solid",
          backgroundColor: "#bbdefb",
        },
        ".MuiPickersCalendarHeader-root": {
          color: "#bbdefb",
          borderRadius: "2px",
          borderWidth: "1px",
          borderColor: "#2196f3",
          border: "1px solid",
          backgroundColor: "#0d47a1",
        },
        ".MuiDayCalendar-root": {
          color: "#bbdefb",
          borderRadius: "2px",
          borderWidth: "1px",
          borderColor: "#2196f3",
          border: "1px solid",
          backgroundColor: "#0d47a1",
        },
        ".MuiPickersDay-root": {
          color: "#bbdefb",
          borderRadius: "2px",
          borderWidth: "1px",
          borderColor: "#2196f3",
          border: "1px solid",
          backgroundColor: "#0d47a1",
        },
        ".MuiMonthCalendar-root": {
          color: "#bbdefb",
          borderRadius: "2px",
          borderWidth: "1px",
          borderColor: "#2196f3",
          border: "1px solid",
          backgroundColor: "#0d47a1",
        },
        ".MuiPickersMonth-root": {
          color: "#bbdefb",
          borderRadius: "2px",
          borderWidth: "1px",
          borderColor: "#2196f3",
          border: "1px solid",
          backgroundColor: "#0d47a1",
        },
      }
    const [langFile, setLangFile] = useState(null);

    useEffect(() => {
      if (lang) setLangFile(lang.lang);
    }, [lang.lang]);

    if (!langFile)
    {
        return <div></div>;
    }

   return (
     <div>
       <Container className="wrapper margin-from-header">
         <Row>
           <Col>
             <div className="inverted-color-text space-grotesk-big-bold medium-text justify-text">
               {langFile.header}
             </div>
           </Col>
         </Row>
         <Row>
           <div>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
               <StaticDatePicker
                 sx={calendarStyle}
                 defaultValue={dayjs(Date.now())}
               />
             </LocalizationProvider>
           </div>
         </Row>
       </Container>
     </div>
   );
    
}

export default Booking;
