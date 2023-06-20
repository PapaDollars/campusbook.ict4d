import React from 'react'
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import {getDownloadURL, ref} from 'firebase/storage'
import storage from '../configFirebase/firebase'
import Navbar from "../components/Navbar";

const Epreuves = () => {

  const [modal, setModal]=useState(false);
  const [resume, setResume]=useState(null);

  useEffect(()=>{
    getDownloadURL(ref(storage, 'FMSB2002.pdf')).then((url)=>{
      setResume(url);
    })
  },[])

  return (
    <>
       <Navbar />
      <div className="container">
    <br></br>

    <Button setModal={setModal}/>

    {modal===true&&(
      <Modal setModal={setModal} resume={resume}/>
    )}

  </div>
    </>
  )
}

export default Epreuves

