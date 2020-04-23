import React from 'react';

// Components
import $ from 'jquery';

/**
 * Initial formatting for screen size from initial loading of page.
 *
 * @param {*} props - props from App, contains data to display in its body
 */
const Formatter = (props) => {
  const pageWidth = $(document).width();
  return pageWidth >= 600 ? (
    <div className='web'>{props.data}</div>
  ) : (
    <div className='mobile'>{props.data}</div>
  );
};

export default Formatter;
