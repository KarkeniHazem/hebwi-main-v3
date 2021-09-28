import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../features/user/actions";

const Editprofile = ({ ping, setPing }) => {
  const user = useSelector((state) => state.Users.users);
  const [show, setShow] = useState(false);
  const [edited, setedited] = useState({
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(userActions.put({ id: user._id, edited }));
    setPing(!ping);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            {user.email}
            {user.lastName}
          </Card.Text>
          <>
            <Button variant="primary" onClick={handleShow}>
              edit
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input
                  type="text"
                  placeholder="enter your name "
                  onChange={(e) =>
                    setedited({ ...edited, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="enter your lastname name "
                  onChange={(e) =>
                    setedited({ ...edited, lastName: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="enter your password "
                  onChange={(e) =>
                    setedited({ ...edited, password: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="enter your email "
                  onChange={(e) =>
                    setedited({ ...edited, email: e.target.value })
                  }
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleClose();
                    handleEdit();
                  }}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </Card.Body>
      </Card>
      z
    </div>
  );
};

export default Editprofile;
