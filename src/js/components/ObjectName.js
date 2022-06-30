import React from 'react';
import Theme from './../themes/getStyle';
import { highlight } from './../helpers/highlight-words-core';

export default function getObjectName(props) {
    const {
        parent_type,
        namespace,
        quotesOnKeys,
        theme,
        jsvRoot,
        name,
        displayArrayKey,
        //
        autoEscape,
        caseSensitive,
        searchWords,
        highlightStyle,
        highlightClassName
    } = props;

    const options = {
        autoEscape,
        caseSensitive,
        searchWords,
        highlightStyle,
        highlightClassName
    };

    const display_name = props.name ? props.name : '';

    if (jsvRoot && (name === false || name === null)) {
        return <span />;
    } else if (parent_type == 'array') {
        return displayArrayKey ? (
            <span {...Theme(theme, 'array-key')} key={namespace}>
                <span class="array-key">
                    {highlight({ ...options, textToHighlight: display_name })}
                </span>
                <span {...Theme(theme, 'colon')}>:</span>
            </span>
        ) : (
            <span />
        );
    } else {
        return (
            <span {...Theme(theme, 'object-name')} key={namespace}>
                <span class="object-key">
                    {quotesOnKeys && (
                        <span style={{ verticalAlign: 'top' }}>"</span>
                    )}
                    <span>
                        {highlight({
                            ...options,
                            textToHighlight: display_name
                        })}
                    </span>
                    {quotesOnKeys && (
                        <span style={{ verticalAlign: 'top' }}>"</span>
                    )}
                </span>
                <span {...Theme(theme, 'colon')}>:</span>
            </span>
        );
    }
}
