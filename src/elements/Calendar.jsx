import { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import dayjs from 'dayjs';
import Button from "@mui/material/Button";

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';

import "./Calendar.css"

const test_data_not_ready=[1, 2, 3, 4, 5]
const background_color = "#31363F"

function Calendar()
{
    const [datePick, setDatePick] = useState(undefined)
    const [timePick, setTimePick] = useState(undefined)
    return (
      <div style={{ width: "100%" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Container fluid>
            <Row
              style={{
                backgroundColor: "#31363F",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <Col lg={6} md={12}>
                <div style={{ backgroundColor: "#1D1616" }}>
                  <StaticDatePicker
                    defaultValue={dayjs(Date.now())}
                    autoFocus
                    disablePast
                    actionBar={null}
                    orientation="portrait"
                    sx={{
                      ".MuiPickersToolbar-root": {
                        color: 'white',
                        borderRadius: "2px",
                        borderWidth: "1px",
                        borderColor: background_color,
                        border: "1px solid",
                        backgroundColor: background_color,
                      },
                      ".MuiDayCalendar-root": {
                        color: 'white',
                        borderRadius: "2px",
                        borderWidth: "1px",
                        borderColor: background_color,
                        border: "1px solid",
                        backgroundColor: background_color,
                      },
                      ".MuiPickersCalendarHeader-root": {
                        color: 'white',
                        borderRadius: "2px",
                        borderWidth: "1px",
                        borderColor: "#2196f3",
                        border: "1px solid",
                        backgroundColor: background_color,
                      },
                    }}
                    slotProps={{
                      actionBar: { actions: [] }, // Disables the action bar entirely
                      layout: {
                      },
                    }}
                  />
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div>Available time slots</div>
                <DigitalClock />
                <span>
                <Button variant="outlined">Back</Button> &nbsp;&nbsp;
                <Button variant="outlined">Confirm</Button>
                </span>
              </Col>
            </Row>
          </Container>
        </LocalizationProvider>
      </div>
    );
}

export default Calendar;
