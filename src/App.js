import React, {useState} from 'react';
import Editor from './Editor'
import Previewer from './Previewer';
import './App.css';

function App() {

  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };



  return (
    <div className="App">

      <Editor markdown={markdown} onChange={handleChange} />
      <Previewer markdown={markdown} />
      
    </div>
  );
}

export default App;
