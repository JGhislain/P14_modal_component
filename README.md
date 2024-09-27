Modal Component
A simple and customizable React modal component.

Installation
You can install the component via npm:

npm i modal-component-ghislain-jambert

Usage
Here's how you can use the modal component in your React project:

import React, { useState } from 'react';
import 'modal-component-ghislain-jambert/dist/Modal.css'; // Import the CSS file
import Modal from 'modal-component';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal show={showModal} onClose={handleClose} title="My Modal">
        <p>This is the content inside the modal!</p>
      </Modal>
    </div>
  );
};

export default App;

Props
The Modal component accepts the following props:

show (boolean): Controls the visibility of the modal. Should be true or false.
onClose (function): A callback function triggered when the modal is closed.
title (string): The title displayed in the modal header.
children (ReactNode): The content to be displayed inside the modal body.
Styles
The modal component uses basic CSS for styling. You can customize the styles by modifying the Modal.css file or by overriding the CSS classes in your project.

Development
To build the project, run:

npm run build

This command transpiles the source code from the src directory to the dist directory using Babel.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Ghislain Jambert