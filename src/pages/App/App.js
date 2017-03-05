import React, {Component} from 'react';
import client from 'graphql-fetch';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Text from '../../components/Text';

const query = client('https://makeador-graphql-api.now.sh');

class App extends Component {
  constructor() {
    super();
    this.queryMakeador = this.queryMakeador.bind(this);
  }
  state = {
    makea: null,
    loading: true,
    error: false
  };
  async queryMakeador() {
    this.setState({
      loading: true
    });
    try {
      const response = await query(`
        {
          makea
        }
      `);
      this.setState({
        makea: response.data.makea,
        loading: false,
        error: false
      });
    } catch (err) {
      this.setState({
        makea: null,
        loading: false,
        error: true
      });
    }
  }
  async componentWillMount() {
    await this.queryMakeador();
  }
  render() {
    return (
      <Layout {...this.state}>
        <Text black={this.state.error}>
          {this.state.error ? `Can't fetch makeador` : this.state.makea}
        </Text>
        <Button
          onClick={this.queryMakeador}
          loading={this.state.loading}
          hide={!this.state.makea && !this.state.error}
        >
          Recalculate if makea
        </Button>
      </Layout>
    );
  }
}

export default App;
