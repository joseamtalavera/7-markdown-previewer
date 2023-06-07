import React, {useState} from 'react';
import Editor from './Editor'
import Previewer from './Previewer';

import './App.css';

function App() {

  

  

  const [markdown, setMarkdown] = useState(`

  
  # Heading 
  ## Heading 2
  [Link](https://example.com)
  \`Inline Code\`
  
  \`\`\`
  // Code Block
  const example = 'Hello, world!';
  \`\`\`
  
  - List Item 1
  - List Item 2
  
  > Blockquote
  
  ![Image](https://example.com/image.jpg)
  
  **Bold Text**
  
  # Heading\n\nParagraph with line break\n\n- List item 1\n- List item 2
  `);
  

  
  


  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };



  return (
    <div className="App">
      <h1 className="title">Markdown Previewer</h1>
      <div className="preview-editor-container" >
        <div className="editor-container">

        <Editor markdown={markdown} onChange={handleChange} />
      </div>
      <div className="preview-container">
        <Previewer markdown={markdown} />
      </div>  
      
    </div>   
  </div>
  );
}

export default App;
