import React from 'react';
import { TODAY_EXCHANGERATES } from '../../constants';
 // Array.isArray(data) ? data : []
const createList = (data) => ((Array.isArray(data) && data) || []).map(
    ({ code, mid  }, index) => (
        <li key={`${index}-${code}`}><b>{code}:: </b>{mid}</li>
    )
);

export default class extends React.Component {
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
        return (<ul>{createList(this.state.apiData)}</ul>)
    }
}
