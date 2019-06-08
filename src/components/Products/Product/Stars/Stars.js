import React from 'react';

import IconF from '../../../UI/Icons/IconF';

import css from './Stars.css';

const Stars = props => {
  const emptyStar = <IconF type="fas" icon="star" size="2.25rem" color="#e0e0e0" />
  const filledStar = <IconF type="fas" icon="star" size="2.25rem" color="#ffea00" />
  const halfFilledStar = <IconF type="fas" icon="star-half-alt" size="2.25rem" color="#ffea00" />

  let stars = (
    <div className={css.StarsContainer}>
      { emptyStar }
      { emptyStar }
      { emptyStar }
      { emptyStar }
      { emptyStar }
    </div>
  )

  if (props.stars >= 0.01 && props.stars <= 0.51)
    stars = (
      <div className={css.StarsContainer}>
        { halfFilledStar }
        { emptyStar }
        { emptyStar }
        { emptyStar }
        { emptyStar }
      </div>
    );

  if (props.stars >= 0.52 && props.stars <= 1)
    stars = (
      <div className={css.StarsContainer}>
        { filledStar }
        { emptyStar }
        { emptyStar }
        { emptyStar }
        { emptyStar }
      </div>
    );

  if (props.stars >= 1.01 && props.stars <= 1.51)
    stars = (
      <div className={css.StarsContainer}>
        { filledStar }
        { halfFilledStar }
        { emptyStar }
        { emptyStar }
        { emptyStar }
      </div>
    )

  if (props.stars >= 1.52 && props.stars <= 2)
    stars = (
      <div className={css.StarsContainer}>
        { filledStar }
        { filledStar }
        { emptyStar }
        { emptyStar }
        { emptyStar }
      </div>
    )

  if (props.stars >= 2.01 && props.stars <= 2.51)
    stars = (
      <div className={css.StarsContainer}>
        { filledStar }
        { filledStar }
        { halfFilledStar }
        { emptyStar }
        { emptyStar }
      </div>
    )

  if (props.stars >= 2.52 && props.stars <= 3)
    stars = (
      <div className={css.StarsContainer}>
        { filledStar }
        { filledStar }
        { filledStar }
        { emptyStar }
        { emptyStar }
      </div>
    )

  if (props.stars >= 3.01 && props.stars <= 3.51)
    stars = (
      <div className={css.StarsContainer}>
        { filledStar }
        { filledStar }
        { filledStar }
        { halfFilledStar }
        { emptyStar }
      </div>
    )

  if (props.stars >= 3.52 && props.stars <= 4)
    stars = (
      <div className={css.StarsContainer}>
        { filledStar }
        { filledStar }
        { filledStar }
        { filledStar }
        { emptyStar }
      </div>
    )

  if (props.stars >= 4.01 && props.stars <= 4.51)
    stars = (
      <div className={css.StarsContainer}>
        { filledStar }
        { filledStar }
        { filledStar }
        { filledStar }
        { halfFilledStar }
      </div>
    )

  if (props.stars >= 4.52 && props.stars <= 5)
    stars = (
      <div className={css.StarsContainer}>
        { filledStar }
        { filledStar }
        { filledStar }
        { filledStar }
        { filledStar }
      </div>
    )

  return (
    stars
  )
}

export default Stars;