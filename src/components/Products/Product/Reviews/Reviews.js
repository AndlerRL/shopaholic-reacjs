import { connect } from 'react-redux';
import React from 'react';

import Btn from '../../../UI/Btn/Btn';
import BtnIcon from '../../../UI/Btn/BtnIcon';
import Stars from '../Stars/Stars';

import css from './Reviews.css';

const Reviews = props => {
  const reviews = props.reviews.map((reviews, key) => {
    let month = [];
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    const dateStr = Date.parse(reviews.created_on)
    const dateNum = new Date(dateStr)
    var getMonth = month[dateNum.getMonth()];
    const parsedDate = `${getMonth}, ${dateNum.getDate()} ${dateNum.getFullYear()} at ${dateNum.getHours()}:${dateNum.getMinutes()}hrs`
    return (
      <div 
        key={key}
        className={css.Review}>
        <div className={css.ReviewData}>
          <span>
            <Stars stars={reviews.rating.toFixed(2)}/>
          </span>
          <div>
            <h6>{ reviews.name }</h6>
            <span>{ parsedDate }</span>
          </div>
        </div>
        <div className={css.Comment}>
          <p>{ reviews.review }</p>
          <div>
            <BtnIcon 
              btnType="contained"
              size="small"
              iconType="far"
              icon="heart"
              iconSize="2rem"
              iconColor="#ff1744" /> { Math.floor(Math.random() * 300) + 3 }
          </div>
        </div>
      </div>
    )
  });
   
  return (
    <div className={css.ProductReviews}>
      <h4>Product Reviews</h4>
      <div className={css.Reviews}>
        { props.reviews.length > 0 ?
          reviews : 
          <div className={css.NoReview}>
            <h1>No reviews Yet!</h1>
            <p>Let yours, so others can see what you think!</p>
          </div> }
      </div>
      <div className={css.PostReview}>
        <h4>Add a Review</h4>
        <form onSubmit={props.submitReview}>
          <div>
            <span>Your Review</span>
            { props.review }
          </div>
          <div>
            <span>Overall Rating</span>
            <div className={css.Rating}>
              <span onClick={props.rating(5)}
                style={{
                  color: props.rated === 5 ? '#ffea00' : '#bdbdbd',
                }}>{ props.rated === 5 ? '★' : '☆' }</span>
              <span onClick={props.rating(4)}
                style={{
                  color: props.rated >= 4 ? '#ffea00' : '#bdbdbd',
                }}>{ props.rated >= 4 ? '★' : '☆' }</span>
              <span onClick={props.rating(3)}
                style={{
                  color: props.rated >= 3 ? '#ffea00' : '#bdbdbd',
                }}>{ props.rated >= 3 ? '★' : '☆' }</span>
              <span onClick={props.rating(2)}
                style={{
                  color: props.rated >= 2 ? '#ffea00' : '#bdbdbd',
                }}>{ props.rated >= 2 ? '★' : '☆' }</span>
              <span onClick={props.rating(1)}
                style={{
                  color: props.rated >= 1 ? '#ffea00' : '#bdbdbd',
                }}>{ props.rated >= 1 ? '★' : '☆' }</span>
            </div>
          </div>
          <Btn
            disabled={props.btnDisabled}
            btnType="contained"
            btnColor="primary"
            size="medium"
            clicked={props.submitReview}>
            { props.isAuthenticated ? 'Submit' : 'Login to post' }
          </Btn>
        </form>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Reviews);