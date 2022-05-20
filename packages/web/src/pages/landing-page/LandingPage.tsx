import React from 'react';
import { useEffect, useState } from 'react';
import { ethers } from "ethers";
import { NOTEFACTORY_ABI, NOTEFACTORY_ADDRESS } from '../../config';

function LandingPage() {
  const [account, setAccount] = useState<any | null>(null);
  const [notebookName, setNotebookName] = useState("");

  useEffect(() => {
    async function load() {
      // Connect to metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner(accounts[0]);
      setAccount(signer._address);

      // Connect to contract
      const noteFactory = new ethers.Contract(NOTEFACTORY_ADDRESS, NOTEFACTORY_ABI, provider);
      const noteFactoryWithSigner = noteFactory.connect(signer);

      // Play with notebooks
      // await noteFactoryWithSigner._createNotebook("dsfda");
      const response:any[] = await noteFactoryWithSigner.getNotebooksForCaller();
      setNotebookName(response[response.length][1]);
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