import React from 'react';

const LIMIT = 30;

export default (BaseComponent) => class extends React.Component {
  state = {
    expanded: false
  }

  render() {
    let content = this.props.content || this.props.children;

    const shouldShowButton  = content.length >= LIMIT;

    content = this.state.expanded ? content : content.substring(0, LIMIT);

    return <BaseComponent color="green">
      {content}
      {shouldShowButton && <button onClick={() => { this.setState({expanded: !this.state.expanded})}}>
          {['rozwiń', 'zwiń'][Number(this.state.expanded)]}
        </button>}
      </BaseComponent>
  }
};
