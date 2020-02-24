import React, { useState, useEffect } from 'react'
// import { Form, FormGroup, Input, Label, ModalBody, ModalFooter, Button } from 'reactstrap'
import { DateTimePicker } from '@material-ui/pickers'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify'
import awsconfig from 'aws-exports'

import {useCreateEventHandler} from 'ropc/components/CreateEventHooks'
import { FormControlLabel } from '@material-ui/core'

Amplify.configure(awsconfig)

function CreateEventForm(props) {

    // console.log("CreateEventForm props:", props)

    const {initialStart, initialEnd, toggle} = props

    // I tried to use an initial value for startTime and endTime
    // of the initialStart and initialEnd. It worked to populate
    // the state but when I use the 
    const [startTime, setStartTime] = useState(initialStart)
    const [endTime, setEndTime] = useState(initialEnd)
    const [summary, setSummary] = useState("Just Testing")
    const [allDay, setAllDay] = useState(false)

    const handleSubmit = () => {
        console.log("Submitting Form:")
        console.log("Start Time:", startTime)
        console.log("End Time:", endTime)
        console.log("Summary:", summary)
        console.log("All Day:", allDay)
        toggle()
    }

    const handleSetEndTime = (input) => {
        console.log("Setting end time:", input)
        setEndTime(input)
    }

    const handleSetStartTime = (input) => {
        console.log("Setting start time:", input)
        setStartTime(input)
    }

    const handleSetAllDay = (event) => {
        console.log("Setting all day switch:", event)
        setAllDay(event.target.checked)
    }

    const handleSummaryChange = (event) => {
        setSummary(event.target.value)
    }

    return (
        <React.Fragment>
            <DialogTitle>Calendar Event</DialogTitle>
            <DialogContent>
                <DateTimePicker
                        variant="inline"
                        label="Event Start"
                        value={startTime}
                        onChange={handleSetStartTime}
                        />
                <DateTimePicker
                        variant="inline"
                        label="Event End"
                        value={endTime}
                        onChange={handleSetEndTime}
                        />
                <TextField label="Summary" value={summary} onChange={handleSummaryChange}/>
                    {/*
                    <Input type="textarea" name="detail" placeholder="Event Detail..." value={inputs.detail} onChange={handleInputChange}/>
                    <Input type="textarea" name="location" placeholder="Event Location..." value={inputs.location} onChange={handleInputChange}/>
                    <Input type="checkbox" name="allDay" value={inputs.allDay} onChange={handleInputChange}>All Day Event</Input> */}
                <FormControlLabel
                    control={<Switch checked={allDay} onChange={handleSetAllDay}/>}
                    label="All Day Event"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={toggle} color="primary">Cancel</Button>
                <Button onClick={handleSubmit} color="primary">Create</Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default withAuthenticator(CreateEventForm)