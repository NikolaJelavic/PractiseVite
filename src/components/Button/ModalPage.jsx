import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore
        distinctio aliquam vitae earum numquam fugiat saepe accusamus,
        perspiciatis cupiditate alias fuga. Beatae, sint quis aperiam magnam
        exercitationem adipisci repudiandae.
      </p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}
