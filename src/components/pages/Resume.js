import React from 'react';
import { ResumePdf } from '../images/index';

export default function Resume() {
    return (
        <div className='container'>
            <h1>Resume</h1>
            <p>
                <a href={ResumePdf} target='_blank'>Link to Resume</a>
            </p>
            
        </div>
    );
}