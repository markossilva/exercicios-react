import React from 'react';
import { childComponentsWith } from '../utils/utils'

export default props =>
    <div>
        <h1>{props.title}</h1>
        {childComponentsWith(props)}
    </div>