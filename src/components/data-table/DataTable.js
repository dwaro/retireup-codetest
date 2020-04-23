import React, { Component } from 'react';

// Components
import Slider from './Slider';
import data from '../../data/sp500_returns.json';

/**
 * This component handles rendering the slider and the table. It does all of the
 * work with the data.
 */
class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.sort((a, b) => (a.year > b.year ? 1 : -1)),
      start: -1, // initial start year from data
      end: -1, // initial end year from data
      currentStart: -1, // slider start
      currentEnd: -1, // slider end
    };
    this.handleSliderUpdate = this.handleSliderUpdate.bind(this);
  }

  /**
   * Initialize start and end with mount
   */
  componentDidMount() {
    const start = this.state.data[0].year;
    const end = this.state.data[this.state.data.length - 1].year;
    this.setState({
      start: start,
      end: end,
      currentStart: start,
      currentEnd: end,
    });
  }

  // update slider years
  handleSliderUpdate(value) {
    this.setState({
      currentStart: value[0],
      currentEnd: value[1],
    });
  }

  render() {
    let cumulativeReturn = 0.0;
    return (
      <div>
        <Slider
          start={this.state.start}
          end={this.state.end}
          onSlide={this.handleSliderUpdate}
        />
        {/* Render data table */}
        <div className='table'>
          <table style={{ width: '100%', borderSpacing: 0 }}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Total Return</th>
                <th>Cumulative Returns</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data
                .slice(
                  this.state.currentStart - this.state.start,
                  this.state.currentEnd + 1 - this.state.start
                )
                .map((data) => {
                  cumulativeReturn += parseFloat(data.totalReturn);
                  cumulativeReturn = Number(cumulativeReturn.toFixed(2));
                  const negative = parseFloat(data.totalReturn) < 0.0;
                  return (
                    <tr key={data.year}>
                      <td>{data.year}</td>
                      {negative ? (
                        <td style={{ color: 'red' }}>{data.totalReturn}</td>
                      ) : (
                        <td>{data.totalReturn}</td>
                      )}
                      <td>{cumulativeReturn}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DataTable;
