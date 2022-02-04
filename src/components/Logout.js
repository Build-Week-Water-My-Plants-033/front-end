import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    localStorage.removeItem('token');
    push('/');
  }, [])

  return (
    <div>Logout</div>
  )
}

export default Logout;