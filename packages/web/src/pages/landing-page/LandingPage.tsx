import React from 'react';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils'
import { STRINGIFY_ABI, NOTEFACTORY_ABI, NOTEFACTORY_ADDRESS } from '../../config';

function LandingPage() {
  const [account, setAccount] = useState<any | null>(null);
  // const [noteFactory, setNoteFactory] = useState<any | null>(null);
  const [notebookName, setNotebookName] = useState("");

  useEffect(() => {
    async function load() {
      // Connect to contract
      const web3 = new Web3(Web3.givenProvider);
      const noteFactory = new web3.eth.Contract(STRINGIFY_ABI as AbiItem[], NOTEFACTORY_ADDRESS);

      // const createResponse = await noteFactory.methods._createNotebook("Weird7").call({from: account});

      const response = await noteFactory.methods.getNotebooksForCaller().call({from: account});
      debugger;
    }

    load();
  }, []);

  return (
    <>
      <div>
        Your account is: {account}
      </div>
      <div>
        Your notebook is named: {notebookName}
      </div>
    </>
  );
}

export default LandingPage;