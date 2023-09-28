import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [contactName, setContactName] = useState();
  const [contactPhone, setContactPhone] = useState();
  const [contactAddress, setContactAddress] = useState();
  const [contactEmail, setContactEmail] = useState();
  const navigate = useNavigate();

  const addContact = (event) => {
    event.preventDefault();
    console.log('añado contacto');
    const user = {
      full_name: contactName,
      email: contactEmail,
      agenda_slug: "spain46",
      address: contactAddress,
      phone: contactPhone
    }
    actions.addContact(user);
   // actions.getUsers();   ----- quizas no hace falta
    setContactAddress('');
    setContactEmail('');
    setContactName('');
    setContactPhone('');
    navigate("/contact");
  }

  return (
    <div className="container">
      <h1 className="text-primary">Add Contact</h1>
      <form onSubmit={addContact} >
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
        <div>
        
            <button type="submit" className="btn btn-primary mx-1" > Save </button>
          
          <Link to="/contact">
            <button className="btn btn-danger  mx-1"> Cancel </button>
          </Link>
        </div>
      </form>
    </div>
  )
}