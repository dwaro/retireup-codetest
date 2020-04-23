import React, { Component } from 'react';
import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: -1,
      end: -1,
      Range: this.createSliderWithToolTip(),
    };
    this.createSliderWithToolTip = this.createSliderWithToolTip.bind(this);
    this.updateYears = this.updateYears.bind(this);
  }

  createSliderWithToolTip() {
    return RcSlider.createSliderWithTooltip(RcSlider.Range);
  }

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
      return <div></div>;
    } else {
      return (
        <div className='slider'>
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
          <div>
            <this.state.Range
              min={this.props.start}
              max={this.props.end}
              defaultValue={[this.props.start, this.props.end]}
              tipFormatter={(value) => `${value}`}
              onChange={(val) => {
                this.updateYears(val);
                this.props.onSlide(val);
              }}
            />
          </div>
        </div>
      );
    }
  }
}

export default Slider;
