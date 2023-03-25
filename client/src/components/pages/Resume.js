import React from 'react';
import { ResumePdf } from '../images/index';

export default function Resume() {
    return (
        <div className='container text-white'>
            <h1>Resume</h1>
            <p>
                <a href={ResumePdf} target='_blank' rel="noreferrer">Link to Resume</a>
            </p>
            
        </div>
    );
}