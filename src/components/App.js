import React, { Component } from 'react';

// Components
import Formatter from './Formatter';
import Intro from './Intro';
import DataTable from './data-table/DataTable';

/**
 * Main layout of retireup-codetest app
 */
class App extends Component {
  renderContent() {
    return (
      <div>
        <Intro />
        <DataTable />
        <br />
        <br />
        <div style={{ textAlign: 'center' }}>
          The data to populate this chart is credited to{' '}
          <a
            href='https://www.slickcharts.com/sp500/returns'
            target='_blank'
            rel='noopener noreferrer'>
            slickcharts.com
          </a>
        </div>
      </div>
    );
  }
  render() {
    // format screen size off the initial load
    return <Formatter data={this.renderContent()} />;
  }
}

export default App;
