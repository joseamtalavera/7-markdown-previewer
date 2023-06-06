import React from 'react';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';


const Previewer = ({ markdown }) => {
  const options = {
    remarkPlugins:[breaks],
  }
  

  return (
    <div id="preview" className="preview-box">
      <ReactMarkdown children={markdown} {...options}/>
    </div>
  );
};

export default Previewer;





/*
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Renderer } from 'marked';

const Previewer = ({markdown}) => {

    

    const renderer = new Renderer();

    renderer.paragraph = (text) => {
        return `<p>${text.replace(/\n/g, '<br>')}</p>`;
    };

    const options = {
       renderer: renderer,
       breaks: true,
    };





    return (
        <div id="preview">
            <ReactMarkdown children={markdown} {...options}/>
        </div>
    );
}

export default Previewer;

*/