import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { FontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faLocationDot, faPhoneFlip, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../img/profile.jpeg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const ContactCard = (props) => {
  const { store, actions } = useContext(Context);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactAddress, setContactAddress] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  //VARIABLES BOOTSTRAP REACT  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteContact = (id) => {
    console.log('borramos contacto con id ' + id);
    console.log('props.id es ' + props.id);
    actions.deleteContact(id);
  }

  const editContact = (event) => {
    event.preventDefault();
    console.log('edito contacto');
    console.log('props.id es ' + props.id);
    const user = {
      full_name: contactName,
      email: contactEmail,
      agenda_slug: "spain46",
      address: contactAddress,
      phone: contactPhone
    }
    actions.editContact(user, props.id);
    actions.getUsers();
    setContactAddress('');
    setContactEmail('');
    setContactName('');
    setContactPhone('');
  }

  let title = props.name;

  return (
    <div>
      <div className="card mb-3 d-flex justify-content-between" >
        <div className="row">
          <div className="col-md-2">
            <img src={profilePic} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text"> <FontAwesomeIcon icon={faLocationDot} /> {props.address}</p>
              <p className="card-text"><FontAwesomeIcon icon={faPhoneFlip} /> {props.phone}</p>
              <p className="card-text"><FontAwesomeIcon icon={faEnvelope} /> {props.email}</p>

            </div>
          </div>
          <div className="col-md-2" >
            <button type="button" className="btn " onClick={handleShow}> <FontAwesomeIcon icon={faPen} /></button>
            <button type="button" className="btn " onClick={() => deleteContact(props.id)}   ><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>
      </div>



      {/*Modal para editar contacto*/}
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Edit contact </Modal.Title>
          </Modal.Header>
          <form onSubmit={editContact} >
            <Modal.Body>

              <div className="mb-3">
                <label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleInputFullName" onChange={(e) => { setContactName(e.target.value) }} /> 
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => { setContactEmail(e.target.value) }} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="exampleInputPhone" onChange={(e) => { setContactPhone(e.target.value) }} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="exampleInputAddress" onChange={(e) => { setContactAddress(e.target.value) }} />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button Button variant="secondary" onClick={handleClose} > Cancel </Button>
              <Button type="submit"  Button variant="primary" onClick={handleClose}> Save </Button>
            </Modal.Footer>
          </form>
        </Modal>

        


      </>





    </div >
  )
}