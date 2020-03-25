import React, { useEffect, useState } from 'react'
import {Calendar as BigCalendar, Views, momentLocalizer} from 'react-big-calendar'
import CreateEvent from 'ropc/components/CreateEvent'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

function Calendar() {

    const now = moment(new Date())

    const initialState = {
        eventData: [],
        showModal: false,
        initialStart: new Date(),
        initialEnd: new Date(),
        displayStart: now.startOf('month'),
        displayEnd: now.endOf('month')
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "STATE_UPDATE":
                return Object.assign({}, state, action.data)
            case "SET_CALENDAR_DATA":
                return Object.assign({}, state, action.data)
            default:
                return state
        }
    }

    const [state, dispatch] = React.useReducer(reducer, initialState)

    // const [calendarState, setCalendarState] = useState(initialState)

    // const [eventData, setEventData] = useState([])
    // const [showModal, setShowModal] = useState(false)
    // const [initialStart, setInitialStart] = useState(new Date())
    // const [initialEnd, setInitialEnd] = useState(new Date())

    useEffect( () => {
        // Simulate getting calendar data
        const calendarData = [{
            id:0,
            title: "The Event Title",
            allDay: false,
            start: new Date(2020, 1, 16, 14, 0),
            end: new Date(2020, 1, 16, 15, 0)
        }]
        dispatch({type:'SET_CALENDAR_DATA', data:{eventData:calendarData}})
        // setCalendarState({...calendarState, eventData: calendarData})
        //   Auth.currentAuthenticatedUser().then( user => setUserData(user))
    }, [])
    // The empty array means only load it when the component mounts

    const handleNavigate = (date, view, action) => {
        console.log("navigate date:", date) // Date object
        const momentDate = moment(date)
        // const momentDate = moment(date).format("YYYY-MM-DD")
        console.log("full year:", date.getFullYear())
        console.log("moment date:", momentDate.format("YYYY-MM-DD"))
        console.log(`Start of the ${view} is ${momentDate.startOf(view)}`)
        console.log(`End of the ${view} is ${momentDate.endOf(view)}`)
        console.log("view:", view) // String, month, week, day
        console.log("action:", action) // String PREV, NEXT, DATE
    }

    const handleViewChange = (view) => {
        console.log("view change:", view) // String, month, week, day
    }

    const formats = {
        dayFormat: 'ddd'
    }

    const localizer = momentLocalizer(moment)

    const handleSelect = (start, end, slots, action, bounds, box) => {
        console.log("start:", start, "end:", end, "slots:", slots, "action:", action)
        // setInitialStart(start.start)
        // setInitialEnd(start.end)
        // setShowModal(true)
        dispatch({type:'STATE_UPDATE', data:{initialStart:start.start,initialEnd:start.end, showModal:true}})
    }

    const hideModal = () => {
        dispatch({type: 'STATE_UPDATE',data: {showModal:false}})
    }

    return (
        <div className='calendar-wrapper'>
            <MuiPickersUtilsProvider utils={MomentUtils}>

                <CreateEvent 
                    showModal={state.showModal}
                    hideModal={hideModal}
                    initialStart={state.initialStart}
                    initialEnd={state.initialEnd}
                />

                <BigCalendar
                    events={state.eventData}
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

            </MuiPickersUtilsProvider>
            
        </div>
    )
}

export default Calendar