import React, { useEffect, useState } from 'react'
import {Calendar as BigCalendar, Views, momentLocalizer} from 'react-big-calendar'
import CreateEvent from 'ropc/components/CreateEvent'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { withAuthenticator } from 'aws-amplify-react'
import Amplify, {Auth} from 'aws-amplify'
import awsconfig from 'aws-exports'

Amplify.configure(awsconfig)

function Calendar() {

    const [eventData, setEventData] = useState([])
    const [eventModal, setEventModal] = useState(false)

    const toggleModal = () => {
        setEventModal(!eventModal)
    }

    useEffect( () => {
        setEventData([{
            id:0,
            title: "The Event Title",
            allDay: false,
            start: new Date(2020, 2, 16, 14, 0),
            end: new Date(2020, 2, 16, 15, 0)
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

    const signOut = () => {
        Auth.signOut({global: true})
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    const formats = {
        dayFormat: 'ddd'
    }

    const localizer = momentLocalizer(moment)

    const handleSelect = (start, end, slots, action, bounds, box) => {
        console.log("start:", start, "end:", end, "slots:", slots, "action:", action)
        toggleModal()
    }

    return (
        <div className='calendar-wrapper'>
            <button onClick={signOut}>Sign Out</button>
            <CreateEvent showModal={eventModal} toggle={toggleModal}/>
            <BigCalendar
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
                onSelectSlot={handleSelect}
            />
            
        </div>
    )
}

export default withAuthenticator(Calendar)