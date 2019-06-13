import React from 'react';

function ThumbsUp(props) {
  function likeHandler() {
    const positiveProgress = document.getElementById('positiveProgress');

    props.setPositiveRating(prevRatings => {
      positiveProgress.style.width = `${prevRatings + 1}px`;
      return prevRatings + 1;
    });
  }

  return (
    <div className="thumb-container">
      <span className="thumbs" onClick={likeHandler}>
        &#128077;
      </span>
      <span>{props.positiveRatings}</span>
    </div>
  );
}

export default ThumbsUp;
