import React from 'react';
import { TODAY_EXCHANGERATES } from '../../constants';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

 // Array.isArray(data) ? data : []
const createList = (data) => ((Array.isArray(data) && data) || []).map(
    ({ code, mid  }, index) => (
        <li key={`${index}-${code}`}>
            <Link to={`/waluta/${code.toLowerCase()}`}><b>{code}::</b></Link> {mid}
        </li>
    )
);

class Currency extends React.Component {
    state = {
        apiData: null
    }

    componentDidMount() {
        fetch(TODAY_EXCHANGERATES, {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                apiData: data[0].rates
            });
        });
    }

    render() {

        console.log(this.props);

        return (<ul>{createList(this.state.apiData)}</ul>)
    }
}

export default Currency;
