// Requires modules
const { readFile } = require('fs').promises;
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

module.exports = {
  readTalkerFile,
};