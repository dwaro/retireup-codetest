import React from 'react';

/**
 * Introduction to the page
 */
const Intro = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          paddingBottom: 20,
          borderBottom: 'solid 1px black',
        }}>
        S&P 500 Total Returns
      </h2>
      <span style={{ letterSpacing: '2px', lineHeight: '22px' }}>
        The S&P 500 index is shown below, with years listed in ascending order.
        The <i>Total Returns</i> column lists the combination of returns
        generated by dividends and returns generated by price changes in the
        index. The <i>Cumulative Returns</i> consist of the sum of the returns
        from the start year indicated by the slider, up to the end year
        indicated by the slider.
      </span>
    </div>
  );
};

export default Intro;
