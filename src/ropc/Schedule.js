import React from 'react'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default function Schedule() {
    const formats = {
        dayFormat: 'ddd'
    }
    const localizer = momentLocalizer(moment)
    return (
        <div className='calendar-wrapper'>
            <Calendar
                events={[]}
                formats={formats}
                step={15}
                timeslots={8}
                localizer={localizer}
                defaultView={Views.WEEK}
                defaultDate={new Date()}
                selectable={true}
            />
            
        </div>
    )
}