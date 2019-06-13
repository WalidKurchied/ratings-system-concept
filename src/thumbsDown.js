import React from 'react';

function ThumbsDown({ setNegativeRating, negativeRatings }) {
  function dislikeHandler() {
    const negativeProgress = document.getElementById('negativeProgress');

    setNegativeRating(prevRatings => {
      negativeProgress.style.width = `${prevRatings + 1}px`;
      return prevRatings + 1;
    });
  }

  return (
    <div className="thumb-container">
      <span className="thumbs" onClick={dislikeHandler}>
        &#x1F44E;
      </span>
      <span>{negativeRatings}</span>
    </div>
  );
}

export default ThumbsDown;
