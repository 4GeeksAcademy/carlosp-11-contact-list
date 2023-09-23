import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { FontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faLocationDot, faPhoneFlip, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../img/profile.jpeg";


export const ContactCard = (props) => {
  const { store, actions } = useContext(Context);
  const [contactName, setContactName] = useState();
  const [contactPhone, setContactPhone] = useState();
  const [contactAddress, setContactAddress] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [contactId, setContactId] = useState();

  const deleteContact = (id) => {
    console.log(id);
    actions.deleteContact(id);
  }
  
  const editContact = (event) => {
    
      event.preventDefault();
      console.log('edito contacto');
      const user = {
        full_name: contactName,
        email: contactEmail,
        agenda_slug: "spain46",
        address: contactAddress,
        phone: contactPhone
      }
      actions.editContact(user, contactId);
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
          <div className="col-md-2">
            <button type="button" onClick={()=>setContactId(props.id)} className="btn " data-bs-toggle="modal" data-bs-target="#accountModal"><FontAwesomeIcon icon={faPen} /></button>
            <button type="button" className="btn " onClick={() => deleteContact(props.id)}   ><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>
      </div>





      {/*Modal para editar contacto*/}
      <div class="modal fade" id="accountModal" tabindex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content p-3">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="accountModalLabel"> {'Edit contact'} </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={editContact} >
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
             
            <div class="modal-footer">
              <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal"> Cancel </button>
              <button type="submit" class="btn btn-primary mx-1" data-bs-dismiss="modal"> Save </button>
            </div>
          </form>
        </div>
      </div>
    </div>





    </div >
  )
}