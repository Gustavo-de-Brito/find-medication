import axios from 'axios';

async function findMedicineByName(name) {
  const response = await axios.get(
    `https://bula.vercel.app/pesquisar?nome=${name}`,
  );

  return response.data;
}

export { findMedicineByName };
