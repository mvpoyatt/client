export const NOTEFACTORY_ADDRESS = '0x5fbdb2315678afecb367f032d93f642f64180aa3';


export const STRINGIFY_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_notebookId","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_text","type":"string"}],"name":"_createEntry","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8158310c"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"_createNotebook","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x6bff9b60"},{"inputs":[{"internalType":"uint256","name":"_notebookId","type":"uint256"}],"name":"getEntriesForNotebook","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"notebookId","type":"uint256"},{"internalType":"uint256","name":"dateCreated","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"text","type":"string"}],"internalType":"struct NoteFactory.Entry[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x82de2e6d"},{"inputs":[],"name":"getNotebooksForCaller","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct NoteFactory.Notebook[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x860df1f7"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"}];


export const NOTEFACTORY_ABI = 
[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_notebookId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_text",
        "type": "string"
      }
    ],
    "name": "_createEntry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "_createNotebook",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_notebookId",
        "type": "uint256"
      }
    ],
    "name": "getEntriesForNotebook",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "notebookId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dateCreated",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "text",
            "type": "string"
          }
        ],
        "internalType": "struct NoteFactory.Entry[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNotebooksForCaller",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "internalType": "struct NoteFactory.Notebook[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]