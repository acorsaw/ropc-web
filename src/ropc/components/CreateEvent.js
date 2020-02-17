import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import moment from 'moment'


const CreateEvent = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const { showModal, toggle } = props

  const submitEvent = () => {}
  const changeHandler = () => {}
  const newEvent = {"end":""}

  // const toggle = () => setModal(!modal);

return (
      <div>
        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={showModal} toggle={toggle} centered={true}>
          <ModalBody>
            <Form onSubmit={submitEvent}>
              <FormGroup>
                <Label for="eventStart">Start</Label>
                <Input type="range" min="0" max="95" className="time-slider" name="eventStart" onChange={changeHandler}/>
              </FormGroup>
              <FormGroup>
                <Label for="eventEnd">End</Label>
                <Input type="datetime-local" name="eventEnd" value={newEvent.end} onChange={changeHandler}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="eventSummary" placeholder="Event Summary..." onChange={changeHandler}/>
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="eventDetail" placeholder="Event Detail..." onChange={changeHandler}/>
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="eventLocation" placeholder="Event Location..." onChange={changeHandler}/>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="eventAllDay" onChange={changeHandler}/>{' '}
                  All Day Event
                </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={submitEvent}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )

  // return (
  //   <div>
  //     <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
  //     <Modal isOpen={showModal} toggle={toggle} className={className}>
  //       <ModalHeader toggle={toggle}>Modal title</ModalHeader>
  //       <ModalBody>
  //         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       </ModalBody>
  //       <ModalFooter>
  //         <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
  //         <Button color="secondary" onClick={toggle}>Cancel</Button>
  //       </ModalFooter>
  //     </Modal>
  //   </div>
  // );

}
//   
// }

// class CreateEvent extends React.Component {

//   // console.log("props:", this.props)

//   state = {
//     events: [],
//     eventModal: false,
//     newEvent: {},
//     startOpen: false
//   }

//   changeHandler = (event) => {
//     const target = event.target
//     /* target has a .type property. If it was a checkbox I'd have to
//     check .checked for the value */
//     const value = target.value
//     switch (target.name) {
//       case "eventStart":
//         const totalMinutes = value * 15
//         const hour = Math.floor(totalMinutes/60)
//         const minutes = totalMinutes % 60
//         const newStartTime = `${hour}:${minutes}`
//         const newStart = moment(this.state.newEvent.start).hour(hour).minute(minutes)
//         const startEvent = Object.assign(this.state, {startTime: newStart})
//         this.setState({startEvent})
//         break
//       case "eventEnd":
//         const endEvent = Object.assign(this.state.newEvent, {end: target.value})
//         this.setState({endEvent})
//         break;
//       default:
//         break;
//     }
//   }
//   //Only convert the day and times into moment objects when they submit the
//   //event back.
//   // const { showModal, toggle } = this.props
//   // console.log(show)
//   // console.log("toggle:", toggle)

//   render() {
//     // const showModal = false
//     console.log(this.props)
//     const { showModal, toggle, start } = this.props
//     return (
//       <Modal isOpen={showModal} toggle={this.toggleModal}>
//         <ModalBody>
//           <Form onSubmit={this.submitEvent}>
//             <FormGroup>
//               <Label for="eventStart">{"Start: "}</Label>
//               <Input type="range" min="0" max="95" className="time-slider" name="eventStart" onChange={this.changeHandler}/>
//             </FormGroup>
//             <FormGroup>
//               <Label for="eventEnd">End</Label>
//               <Input type="datetime-local" name="eventEnd" value={this.state.newEvent.end} onChange={this.changeHandler}/>
//             </FormGroup>
//             <FormGroup>
//               <Input type="text" name="eventSummary" placeholder="Event Summary..." onChange={this.changeHandler}/>
//             </FormGroup>
//             <FormGroup>
//               <Input type="textarea" name="eventDetail" placeholder="Event Detail..." onChange={this.changeHandler}/>
//             </FormGroup>
//             <FormGroup>
//               <Input type="textarea" name="eventLocation" placeholder="Event Location..." onChange={this.changeHandler}/>
//             </FormGroup>
//             <FormGroup check>
//               <Label check>
//                 <Input type="checkbox" name="eventAllDay" onChange={this.changeHandler}/>{' '}
//                 All Day Event
//               </Label>
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={this.submitEvent}>Do Something</Button>{' '}
//           <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
//     )
//   }
// }

export default CreateEvent