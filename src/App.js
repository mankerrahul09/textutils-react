// import './App.css';
import React, { useState } from 'react';//imrc
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import Error from './components/Error';
// import {
//   BrowserRouter as Main,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title ="TextUtils is Amazing"; // This is used when to want to flash title 
      // }, 2000);
      // setInterval(() => {
      //   document.title =" Install TextUtils Now";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }

  }
  return (
    <>
      {/* <Main> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter" mode={mode} />
          {/* <Routes>
            < Route exact path="/about" element={<About  mode={mode}/>} />
            < Route exact path="/textutils-react" element={<TextForm />} />
            <Route exact path="/home" element={
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter" mode={mode} />
            }/>
            < Route exact path="/*" element={<Error />} />
        </Routes> */}
      </div>
    {/* </Main >  */}
    </>
  );
}

export default App;
