import React from 'react';
import { CURRENCY_TODAY } from '../../constants';
import { withRouter } from 'react-router-dom';

import Text from '../Text';

function fillPath(strUrl = '', params = {}) {
  return Object.entries(params).reduce((str, [name, value]) => {
    return str.replace(`:${name}`, value);
  }, strUrl);
}

class CurrencyToday extends React.Component {
    state = {
        apiData: null
    }

    componentDidMount() {
        fetch(fillPath(CURRENCY_TODAY, this.props.match.params), {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                apiData: data
            });
        });
    }

    render() {

        console.log(this.props, this.state);

        return <Text>{JSON.stringify(this.state.apiData)}</Text>
    }
}

export default withRouter(CurrencyToday);
