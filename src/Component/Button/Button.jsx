import React from 'react';
import './Button.css';

const Button = ({button}) => {
    return (
        <div>
            <button className='button'>
                {button}
            </button>
        </div>
    );
};

export default Button;