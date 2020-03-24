import React from 'react';

import { TODAY_EXCHANGERATES } from '../../constants';
import { Link } from 'react-router-dom';

 // Array.isArray(data) ? data : []
const createList = (data) => ((Array.isArray(data) && data) || []).map(
    ({ code, mid  }, index) => (
        <li key={`${index}-${code}`}>
            <Link to={`/waluta/${code.toLowerCase()}`}><b>{code}::</b></Link> {mid}
        </li>
    )
);

const Currency = () => {

}

export default Currency;
