import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import {useReactMediaRecorder} from 'react-media-recorder'
// import conf from "../../src/assets/conf.jpg";
import "./HomeRoom.css";

const HomeRoom = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  
// const {status,startRecording,stopRecording,mediaBloUrl} = useReactMediaRecorder({screen:true})


  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="bg-image img" >
          <div class="mask p-5 bg">
            <div class="d-flex justify-content-center align-items-center h-100">
              <h1 class="text-white p-5">Bienvenue à la vidéoconférence</h1>
            </div>
            {/* Enter Code */}
            <form
                onSubmit={submitCode}
                className="text-white md:pt-12 flex flex-col items-center justify-center"
              >
              <div className="container">
              <div class="row g-3 justify-content-center">
                  <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Enter Room Code</label>
                  </div>
                  <div class="col-auto">
                    <input type="text"
                                required
                                placeholder="Enter Room Code"
                                value={RoomCode}
                                onChange={(e) => setRoomCode(e.target.value)} 
                                id="inputPassword6" class="form-control" 
                                aria-describedby="passwordHelpInline" />
                  
                  </div>
                  <div class="col-auto">
                  <button type="submit" class="btn btn-success px-5 ">Start</button>
                  </div>
                </div>
              </div>
              </form>

              </div>
          
              <div>
                  {/* <div className="container">
                   <div class="row g-3 justify-content-center">
                      <div class="col-auto">
                      <p className="text-warning fs-4">{status}</p>
                      </div>
                      <div class="col-auto">
                        <button class="btn btn-success px-5 " onClick={startRecording}>Start recording</button>
                      </div>
                      <div class="col-auto">
                          <video src={mediaBloUrl} autoplay loop controls > </video>
                      </div>
                      <div class="col-auto">
                      <button class="btn btn-danger px-5 " onClick={stopRecording}>Stop recording</button>
                      </div>
                    </div>
                  </div> */}
          </div>
		  </div>
    </>
  );
};

export default HomeRoom;
