import React, { Component } from 'react';

// Components
import Formatter from './Formatter';
import Intro from './Intro';
import DataTable from './data-table/DataTable';

class App extends Component {
  renderContent() {
    return (
      <div>
        <Intro />
        <DataTable />
      </div>
    );
  }
  render() {
    return <Formatter data={this.renderContent()} />;
  }
}

export default App;
