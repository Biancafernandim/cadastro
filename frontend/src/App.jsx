// frontend/src/App.jsx
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import ClientForm from './components/ClientForm'; // Importe o formulário

function App() {
  // Aqui você adicionaria a lógica de layout principal (menu lateral, etc.)
  return (
    <MantineProvider>
        {/* Por enquanto, vamos renderizar o formulário diretamente */}
        <ClientForm />
    </MantineProvider>
  );
}

export default App;