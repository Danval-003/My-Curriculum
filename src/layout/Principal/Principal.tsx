import React, { useState } from 'react';
import { PersonalInfo, ToShow } from '../../pages';
import './Principal.scss';


const Principal: React.FC = () => {
    const [selection, setSelection] = useState(0);
    return (
        <div className='content'>
            <PersonalInfo selection={selection} setSelection={setSelection} />
            <ToShow />
        </div>
    );
}

export default Principal;
