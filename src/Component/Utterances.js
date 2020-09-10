import React, { createRef, useLayoutEffect } from 'react';

const Utterances = React.memo(({ repo }) => {
    const containerRef = createRef();
    useLayoutEffect(() => {
        const utterances = document.createElement('script');
        const attributes = {
            src: "https://utteranc.es/client.js",
            repo: "KimNamKyu/portFolio",
            'issue-term': "pathname",
            theme: "github-light",
            crossorigin: "anonymous",
            async: true
        };

        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value);
        });
        containerRef.current.appendChild(utterances);
    }, [repo]);
    return React.createElement("div", { ref: containerRef });
});

export default Utterances;