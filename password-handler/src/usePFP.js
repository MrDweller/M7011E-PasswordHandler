import { useState } from 'react';



export default function usePFP() {
  const getPFP = () => {
    const sessionPFP = sessionStorage.getItem('pfpURL');
    
    const pfpHash = sessionStorage.getItem('pfpHash');
    const imageHash = JSON.parse(pfpHash);
    const userPFP = JSON.parse(sessionPFP);
    const jsonData = {
        pfpURL: userPFP,
        pfpHash: imageHash
    }
    
    
    return jsonData;
  };

  const [pfp, setPFP] = useState(getPFP());

  const savePFP = imageObject => {
    if(!imageObject) {
      imageObject = null;
    }
    console.log("in save PFP")
    sessionStorage.setItem('pfpURL', JSON.stringify(imageObject["pfpURL"]));
    sessionStorage.setItem('pfpHash', JSON.stringify(imageObject["pfpHash"]));
    setPFP(imageObject);
  };

  return {
    setPFP: savePFP,
    pfp
  }
}