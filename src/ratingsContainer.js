import React, { useState } from 'react';
import ThumbsUp from './thumbsUp';
import ThumbsDown from './thumbsDown';
import RatingsBar from './ratingsBar';

function RatingsContainer() {
  const [positiveRatings, setPositiveRating] = useState(0);
  const [negativeRatings, setNegativeRating] = useState(0);

  return (
    <section id="ratingsContainer">
      <ThumbsUp
        positiveRatings={positiveRatings}
        setPositiveRating={setPositiveRating}
      />
      <ThumbsDown
        negativeRatings={negativeRatings}
        setNegativeRating={setNegativeRating}
      />
      <RatingsBar
        positiveRatings={positiveRatings}
        negativeRatings={negativeRatings}
      />
    </section>
  );
}

export default RatingsContainer;
