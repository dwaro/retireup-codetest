import React, { Component } from 'react';
import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

/**
 * This class renders the slider Range component
 */
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: -1,
      end: -1,
      Range: RcSlider.createSliderWithTooltip(RcSlider.Range),
    };
    this.updateYears = this.updateYears.bind(this);
  }

  /**
   * Update state start and end years once component has finished first rendering
   */
  componentDidUpdate() {
    if (this.state.start === -1 && this.state.end === -1) {
      if (this.props.start !== -1 && this.props.end !== -1) {
        this.setState({
          start: this.props.start,
          end: this.props.end,
        });
      }
    }
  }

  /**
   * Update state to match new slider year values
   * @param {*} val - new year values from slider
   */
  updateYears(val) {
    const start = val[0];
    const end = val[1];
    this.setState({
      start,
      end,
    });
  }

  render() {
    if (this.state.start === -1 && this.state.end === -1) {
      return <div></div>; // component not ready to render
    } else {
      return (
        <div className='slider'>
          {/* Render years above slider */}
          <div>
            <div style={{ float: 'left', fontWeight: 'bold' }}>
              {this.state.start}
            </div>
            <div style={{ float: 'right', fontWeight: 'bold' }}>
              {this.state.end}
            </div>
          </div>
          <br />
          <br />
          {/* Render slider */}
          <div>
            <this.state.Range
              min={this.props.start}
              max={this.props.end}
              defaultValue={[this.props.start, this.props.end]}
              tipFormatter={(value) => `${value}`}
              onChange={(val) => {
                this.updateYears(val); // update years for slider
                this.props.onSlide(val); // update years for data table
              }}
            />
          </div>
        </div>
      );
    }
  }
}

export default Slider;
