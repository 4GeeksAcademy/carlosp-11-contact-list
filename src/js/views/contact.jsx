// Importar Context
import React, { useContext } from "react";  // 1. Importar el Hook
import { ContactCard } from "../component/contactCard.jsx";
import { Context } from "../store/appContext.js";  // 2. Context

export const Contact = (props) => {
  const { store, actions } = useContext(Context)  // 3. desecturar store, actions del Context

  return (
    <div className="container">
      {store.users.map((user) =>
        <ContactCard name={user.full_name} phone={user.phone} email={user.email} address={user.address} id={user.id} />)}
    </div>
  )
};

