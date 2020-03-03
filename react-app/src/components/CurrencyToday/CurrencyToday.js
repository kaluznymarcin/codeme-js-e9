import React from 'react';
import { CURRENCY_TODAY } from '../../constants';
import { withRouter } from 'react-router-dom';

import Text from '../TextContainer';
import withLimitText from '../withLimitText';

import { connect } from 'react-redux';
import setCurrencyTodayData from '../../actions/setCurrencyTodayData';

const TextLimit = withLimitText(Text);

function fillPath(strUrl = '', params = {}) {
    return Object.entries(params).reduce((str, [name, value]) => str.replace(`:${name}`, value), strUrl);
}

class CurrencyToday extends React.Component {
    state = {
        apiData: null
    }

    componentDidMount() {
        !this.props.apiData && fetch(fillPath(CURRENCY_TODAY, this.props.match.params), {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log('->>> ', data, this.props);
            this.props.setData(data);
            /* this.setState({
                apiData: data
            }); */
        });
    }

    render() {
        return [
            <TextLimit>{JSON.stringify(this.props.apiData)}</TextLimit>,
            <Text>hfdsjhfjsdhfjdshfjdhsjf jdsfh djsfh jdshf dhsfjhds jfh</Text>
        ]

    }
}

export default connect(
    state => ({
        apiData: state.currencyTodayData
    }),
    dispatch => ({
        setData: data => dispatch(setCurrencyTodayData(data))
    })
)(withRouter(CurrencyToday));
