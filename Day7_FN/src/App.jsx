import { useState } from 'react'
import './App.css'
import Gallery from '../components/classcomponents/Gallery'; // Import ClassCompExe component
import ClassCompExe from '../components/functionalcomponents/ClassCompExe'; // Import ClassCompExe component

const App = () => {
  return (
    <div>
      <h1>Hello from App</h1>
      <Gallery /> 
      <ClassCompExe /> 
    </div>
  );
};
export default App;
