import {useState} from 'react'

// Custom hook to handle form events
export const useCreateEventHandler = (initialValues, callback) => {

    const [inputs, setInputs] = useState(initialValues)

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault()
        }
        callback()
    }

    const handleInputChange = (event) => {
        console.log("event:", event)
        event.persist()
        setInputs(inputs => ({...inputs, [event.target.name]:
            event.target.value}))
    }
    
    return {
        handleSubmit,
        handleInputChange,
        inputs
    }

}