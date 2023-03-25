// MarkdownRenderer.js
import React, { useState, useEffect } from 'react';
import rdmd from '@readme/markdown';
import MarkdownTransformer from "@/components/MarkdownTransformer";

const MarkdownRenderer = ({ markdownFile }) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(markdownFile)
            .then((response) => response.text())
            .then((text) => setMarkdown(text))
            .catch((error) => console.error('Error fetching Markdown file:', error));
    }, [markdownFile]);

    return <MarkdownTransformer body={markdown} />;
};

export default MarkdownRenderer;
