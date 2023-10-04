import axios from 'axios';

async function findMedicationByName(name) {
  const response = await axios.get(
    `https://bula.vercel.app/pesquisar?nome=${name}`,
  );

  return response.data;
}

async function findMedicationByProcessNumber(processNumber) {
  const response = await axios.get(
    `https://bula.vercel.app/medicamento/${processNumber}`,
  );
  return response.data;
}

export { findMedicationByName, findMedicationByProcessNumber };
