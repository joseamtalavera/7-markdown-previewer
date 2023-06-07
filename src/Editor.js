
import React from 'react';

function Editor({ markdown, onChange }) {
    return (
        <textarea id="editor" className="editor-textarea" value={markdown} onChange={onChange} />
    );
}

export default Editor;
