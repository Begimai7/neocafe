import { useState } from 'react';
import Modal from './components/modal/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  return (
    <div>
      <button onClick={handleOpen}>открыть</button>
      <Modal
        isOpen={modalOpen}
        onClose={handleClose}
        borderClass="rounded"
        width=""
        height=""
      >
        <p>Hello world!</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
          doloremque quo consequatur ratione facilis vel voluptas.
          Reprehenderit, dolores laborum! Vitae, nobis. Quod, temporibus animi
          ullam dignissimos rem ipsa voluptates iusto?
        </p>
      </Modal>
    </div>
  );
}

export default App;
