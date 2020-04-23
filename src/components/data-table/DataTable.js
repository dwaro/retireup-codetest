import React, { Component } from 'react';

// Components
import Slider from './Slider';
import data from '../../data/sp500_returns.json';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.sort((a, b) => (a.year > b.year ? 1 : -1)),
      start: -1,
      end: -1,
      currentStart: -1,
      currentEnd: -1,
    };
    this.handleSliderUpdate = this.handleSliderUpdate.bind(this);
  }

  componentDidMount() {
    this.setState({
      start: this.state.data[0].year,
      end: this.state.data[this.state.data.length - 1].year,
    });
  }

  handleSliderUpdate(value) {
    this.setState({
      currentStart: value[0],
      currentEnd: value[1],
    });
  }

  render() {
    // console.log(this.state.start);
    // console.log(this.state.end);
    return (
      <div>
        <Slider
          start={this.state.start}
          end={this.state.end}
          onSlide={this.handleSliderUpdate}
        />
        <div className='table'>Table data</div>
      </div>
    );
  }
}

export default DataTable;
