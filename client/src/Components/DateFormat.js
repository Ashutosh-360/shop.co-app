import React from 'react';

const DateConverter = ({dateFormat}) => {
  const originalDate = dateFormat;
  const formattedDate = new Date(originalDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <p>Posted on {formattedDate}</p>
    </div>
  );
};

export default DateConverter;
