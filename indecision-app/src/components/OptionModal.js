import React from "react";
import Modal from "react-modal";

const OptionModal = ({ selectedOption, handleClearOption }) => (
  <Modal
    isOpen={!!selectedOption}
    contentLabel="Selected Option"
    onRequestClose={handleClearOption}
  >
    <h3>Selected Option</h3>
    {selectedOption && <p>{selectedOption}</p>}
    <button onClick={handleClearOption}>Okay</button>
  </Modal>
);

export default OptionModal;
