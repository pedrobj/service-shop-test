import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'flexboxgrid';

// Import Components
import Helmet from 'react-helmet';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true }); // eslint-disable-line
  }

  render() {
    return (
      <div>
        <Helmet
          title="Service Shop - Test"
          titleTemplate="%s - Service Shop"
          meta={[
            { charset: 'utf-8' },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  dispatch: PropTypes.func,
};

export default App;
