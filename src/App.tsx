import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransectionModal } from './components/NewTransectionModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false)
  }
  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

     <Dashboard />

     <NewTransectionModal 
      onOpen={isNewTransactionOpen} 
      onRequestClose={handleCloseNewTransactionModal}
     />

     <GlobalStyle />
    </>
  );
}

export default App;
