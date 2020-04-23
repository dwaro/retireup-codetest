import React from 'react';

// Components
import $ from 'jquery';

const Formatter = (props) => {
  const pageWidth = $(document).width();
  return pageWidth >= 600 ? (
    <div className='web'>{props.data}</div>
  ) : (
    <div className='mobile'>{props.data}</div>
  );
};

export default Formatter;
