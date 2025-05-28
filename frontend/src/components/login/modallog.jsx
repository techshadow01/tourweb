import React from "react";
import { Logcontext } from "../../context/context";
import Modal from "@mui/joy/Modal";
import Login from "./login";
import Signup from "./signup";

const modallog = ({ value }) => {
  const [open, setOpen] = React.useState(false);
  const [islogin, setislogin] = React.useState(value);

  const handleclose = () => {
    setOpen(false);
    setislogin(value);
  };

  return (
    <React.Fragment>
      <Logcontext.Provider value={{ islogin, setislogin }}>
        <button
          className="absolute left-0 top-0 w-full h-full z-10"
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        ></button>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={handleclose}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {islogin ? <Login /> : <Signup />}
        </Modal>
      </Logcontext.Provider>
    </React.Fragment>
  );
};

export default modallog;
