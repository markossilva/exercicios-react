import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponent from './components/PrimeiroComponent'
// import { CompA, CompB } from './components/DoisComponent';
import FamiliaSilva from './components/FamiliaSilva'
import Familia from './components/Familia';
import Membro from './components/Membro';

ReactDOM.render(
    <div>
        <Familia title="Familia" sobrenome="Silva">
            <Membro nome="Markos"></Membro>
            <Membro nome="Rodrigo"></Membro>
        </Familia>
    </div>,
    document.getElementById('root'));
