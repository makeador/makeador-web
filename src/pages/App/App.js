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
    makea: null
  };
  async queryMakeador() {
    const response = await query(`
      {
        makea
      }
    `);
    this.setState({
      makea: response.data.makea
    });
  }
  async componentWillMount() {
    await this.queryMakeador();
  }
  render() {
    return (
      <Layout makea={this.state.makea}>
        <Text>
          {this.state.makea}
        </Text>
        <Button onClick={this.queryMakeador}>Recalculate if makea</Button>
      </Layout>
    );
  }
}

export default App;
