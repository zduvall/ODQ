import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function UserInfo({ setShowUpdateUser }) {
  const sessionUser = useSelector((state) => state.session.user);

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState(sessionUser.firstName);
  const [lastName, setLastName] = useState(sessionUser.lastName);
  const [email, setEmail] = useState(sessionUser.email);
  const [lic, setLic] = useState(sessionUser.lic);
  const [pxName, setPxName] = useState(sessionUser.pxName);
  const [phone, setPhone] = useState(sessionUser.phone);

  return (
    <div>
      <form>Form!!</form>
    </div>
  );
}
