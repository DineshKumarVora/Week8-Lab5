// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import Signup from './Signup';
import GenericForm from './GenericForm';

function App() {
  return (
    <div className="App">
      <h1>Forms Lab</h1>
      <Signup />
      <h2>Generic Form</h2>
      <GenericForm />
    </div>
  );
}

export default App;