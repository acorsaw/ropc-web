import React, { useEffect, useState } from 'react'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

function Schedule() {

    const [eventData, setEventData] = useState([])

    useEffect( () => {
        setEventData([{
            id:0,
            title: "The Event Title",
            allDay: false,
            start: new Date(2019, 10, 10, 14, 0),
            end: new Date(2019, 10, 10, 15, 0)
        }])
        //   Auth.currentAuthenticatedUser().then( user => setUserData(user))
    }, [])
    // The empty array means only load it when the component mounts

    const handleNavigate = (date, view, action) => {
        console.log("date:", date) // Date object
        const momentDate = moment(date).format("YYYY-MM-DD")
        console.log("full year:", date.getFullYear())
        console.log("moment date:", momentDate)
        console.log("view:", view) // String, month, week, day
        console.log("action:", action) // String PREV, NEXT, DATE
    }

    const handleViewChange = (view) => {
        console.log("view:", view) // String, month, week, day
    }

    const formats = {
        dayFormat: 'ddd'
    }

    const localizer = momentLocalizer(moment)

    return (
        <div className='calendar-wrapper'>
            <Calendar
                events={eventData}
                formats={formats}
                step={15}
                timeslots={8}
                localizer={localizer}
                defaultView={Views.WEEK}
                defaultDate={new Date()}
                selectable={true}
                onNavigate={handleNavigate}
                onView={handleViewChange}
            />
            
        </div>
    )
}

export default Schedule