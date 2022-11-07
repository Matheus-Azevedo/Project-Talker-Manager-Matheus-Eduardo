// Requires modules
const { readFile, writeFile } = require('fs').promises;
const { join } = require('path');

// Paths
const TALKER_PATH = '../talker.json';

async function readTalkerFile() {
  try {
   const data = await readFile(join(__dirname, TALKER_PATH), 'utf8');
   return JSON.parse(data);
  } catch (error) {
   return console.error(`Error ao ler o arquivo: ${error}`);
  }   
}

async function writeTalkerFile(newTalker) {
  try {
    const oldTalkers = await readTalkerFile();
    const nextId = oldTalkers[oldTalkers.length - 1].id + 1;
    const talker = { id: nextId, ...newTalker };
    const newTalkers = [...oldTalkers, talker];
    await writeFile(join(__dirname, TALKER_PATH), JSON.stringify(newTalkers));
    return talker;
  } catch (error) {
    return console.error(`Error ao escrever no arquivo: ${error}`);
  }
}

async function updateTalkerFile(updatedTalker) {
  try {
    const oldTalkers = await readTalkerFile();
    const updatedTalkers = oldTalkers
      .map((t) => (t.id === Number(updatedTalker.id) ? updatedTalker : t));
    await writeFile(join(__dirname, TALKER_PATH), JSON.stringify(updatedTalkers));
  } catch (error) {
    return console.error(`Error ao escrever no arquivo: ${error}`);
  }
}

async function deleteTalkerFile(id) {
  try {
    const oldTalkers = await readTalkerFile();
    const newTalkers = oldTalkers.filter((t) => t.id !== Number(id));
    await writeFile(join(__dirname, TALKER_PATH), JSON.stringify(newTalkers));
  } catch (error) {
    return console.error(`Error ao deletar no arquivo: ${error}`);
  }
}

module.exports = {
  readTalkerFile,
  writeTalkerFile,
  updateTalkerFile,
  deleteTalkerFile,
};