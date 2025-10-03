// frontend/src/components/ClientForm.jsx
import { useForm } from '@mantine/form';
import { TextInput, Button, Paper, Title } from '@mantine/core';
import axios from 'axios';

// A URL da sua API. IMPORTANTE: A porta pode mudar! Verifique no terminal do backend.
const API_URL = 'https://localhost:7123/api';

function ClientForm() {
  const form = useForm({
    initialValues: {
      name: '',
      cnpj: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Nome muito curto' : null),
      cnpj: (value) => (value.length < 14 ? 'CNPJ inválido' : null),
    },
  });

  const handleSubmit = async (values) => {
    try {
      await axios.post(`${API_URL}/clients`, values);
      alert('Cliente cadastrado com sucesso!');
      form.reset();
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      alert('Falha ao cadastrar cliente.');
    }
  };

  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md" style={{ maxWidth: 500, margin: 'auto' }}>
      <Title order={2} ta="center" mb="lg">Cadastrar Novo Cliente</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Nome Fantasia"
          placeholder="Nome da empresa"
          required
          {...form.getInputProps('name')}
        />
        <TextInput
          label="CNPJ"
          placeholder="00.000.000/0001-00"
          required
          mt="md"
          {...form.getInputProps('cnpj')}
        />
        <Button
          fullWidth
          mt="xl"
          type="submit"
          style={{ backgroundColor: '#FF6B00' }}
        >
          Salvar Cliente
        </Button>
      </form>
    </Paper>
  );
}

export default ClientForm;