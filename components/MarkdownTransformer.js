import React from 'react';
import rdmd from '@readme/markdown';

export default ({ body }) => (
    <div className="markdown-body">
        {rdmd(body)}
    </div>
);