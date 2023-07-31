import { styled } from "styled-components";
import Video from "./Componants/Video";

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPlayer from "./Componants/VideoPlayer";
import { useState } from "react";
import Upload from "./Componants/Upload";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [modal, setModal]=useState(false)
  return (
    <BrowserRouter>
      <AppStyled className="App">
        <div className="upload">
          <button onClick={()=>setModal(true)}>Upload</button>
        </div>
        <h1>Video Uploader</h1>
        {modal&& <Upload/>}
        <Routes>
          <Route path='/' element={<Video />} />
          <Route path='/videos/:id' element={<VideoPlayer />} />
        </Routes>
        {modal && <div className="overlay" onClick={()=> setModal(false)}></div>}
        <ToastContainer />
      </AppStyled>
    </BrowserRouter>
  );
}

const AppStyled = styled.div`
  padding: 3rem 18rem;
  h1{
    color: #fff;
    background: linear-gradient(to right, #00b894 40%,#705DF2 );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .upload{
    display: flex;
    justify-content: flex-start;
    transition: opacity 0.3s ease;
  }
`;

export default App;
