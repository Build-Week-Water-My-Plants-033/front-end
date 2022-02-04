import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    localStorage.removeItem('token');
    push('/');
  // eslint-disable-next-line
  },[])

  return (
    <div>Logout</div>
  )
}

export default Logout;