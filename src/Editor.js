
import React from 'react';

function Editor({ markdown, onChange }) {
    return (
        <textarea id="editor" value={markdown} onChange={onChange} />
    );
}

export default Editor;
