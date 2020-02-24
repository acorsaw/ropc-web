import React, { useState } from 'react'
// import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap'
import { Modal } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog'

import CreateEventForm from 'ropc/components/CreateEventForm'

import {useCreateEventHandler} from 'ropc/components/CreateEventHooks'

const CreateEvent = (props) => {

  console.log("Props:", props)
  const {
    initialStart,
    initialEnd,
    showModal,
    setShowModal
  } = props


  const createEvent = (e) => {
    console.log("Create an event here:", e)
  }

  const handleOpen = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        
        
          <CreateEventForm initialStart={initialStart} initialEnd={initialEnd} toggle={handleClose}/>
        

      </Dialog>
      {/* <Modal style={{display:'flex',alignItems:'center',justifyContent:'center'}} open={showModal} onClose={handleClose}>
      </Modal> */}
    </div>
  )

}

export default CreateEvent