import React from 'react';

interface TextButtonProps {
    path: string;
    text: string;
    invert?: boolean;
}

const TextButton = ({ path, text, invert }: TextButtonProps): JSX.Element => {
    const isExternal = path.indexOf('http') === 0;
    return (
        <div className="c_textButtonContainer">
            <a
                className={`c_textButton ${invert ? 'c_textButton--invert' : ''}`}
                href={path}
                target={isExternal ? '_blank' : '_self'}
            >
                <span className="c_textButton__text">{text}</span>
                <img className="c_textButton__arrow" src="/assets/next.svg" />
            </a>

        </div>
    )
}

export default TextButton;