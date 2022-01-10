import React, { useState } from "react";

import Books from "../Books/Books";
import "./Main.css";
import Modal from "../Modal/Modal";

const Main = (_) => {
  const [modal, setModal] = useState(false);

  return (
    <Modal modal={modal}>
      <main>
        <Books onSetModal={setModal} />
      </main>
    </Modal>
  );
};

export default Main;
