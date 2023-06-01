import React from 'react';
import ReactMarkdown from 'react-markdown';

const Previewer = ({markdown}) => {
    return (
        <div id="preview">
            <ReactMarkdown children={markdown} />
        </div>
    );
}

export default Previewer