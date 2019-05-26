import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Btn from '../../UI/Btn/Btn';
import BtnIcon from '../../UI/Btn/BtnIcon';
import { Loading, LoadingText } from '../../UI/Loading/Loading';
import css from './Product.css';
import Stars from './Stars/Stars';



const ProductDetail = props => {
  const [animation, setAnimation] = useState(false);
  const [averageStars, setAverageStars] = useState(0)

  let productLoc = null

  if (props.isLoading)
    productLoc = <LoadingText />
  else 
    productLoc = props.productLoc.map(location => (
      <ul 
        className={css.Routes}
        key={'ProductLocation'}>
        <li>
          <span
            onClick={props.goTo('Home')}>
            Home 
          </span>
        </li>
        <li>
          <span
            onClick={props.goTo('Products')}>
            Products 
          </span>
        </li>
        <li>
          <span
            onClick={props.goTo({ name: 'Department', department_id: location.department_id })}>
            Department: {location.department_name} 
          </span>
        </li>
        <li>
          <span
            onClick={props.goTo({ name: 'Category', department_id: location.category_id })}>
            Category: {location.category_name} 
          </span>
        </li>
      </ul>
    ));
  
  const attributesColor = props.productAttributes.map(attr => {
    if (attr.attribute_name === 'Color')
      return (
        <button 
          key={attr.attribute_value_id}
          className={props.colorAttribute[attr.attribute_value] ? css.Selected : css.ColorItem}
          onClick={props.attributeSelect(attr.attribute_value, attr.attribute_value_id)}
          name={attr.attribute_value}>
          <div style={{ backgroundColor: attr.attribute_value}}></div>
        </button>
      )
  })

  const attributesSize = props.productAttributes.map(attr => {
    if (attr.attribute_name === 'Size')
      return (
        <button 
          key={attr.attribute_value_id}
          className={props.sizeAttribute[attr.attribute_value] ? css.Selected : css.SizeItem}
          onClick={props.attributeSelect(attr.attribute_value ,attr.attribute_value_id)}
          name={attr.attribute_value}>
          <span>{ attr.attribute_value }</span>
        </button>
      )
  })

  let product = null;

  if (props.isLoading)
    product = ( 
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'calc(100vw - 64px)',
        transform: 'scale(1.5)'
      }}>
        <Loading />
      </div>
    )
  else
    product = props.product.map(product => {
      const changeImg = () => {
        setAnimation(!animation);
      }

      return (
        <div 
          key={product.product_id}
          className={css.ProductDetailHead}>
          <div className={css.ProductImg}>
            <div className={css.ImgContainer}>
              <img src={`https://backendapi.turing.com/images/products/${ !animation ? product.image : product.image_2 }`}
                className={[
                  css.ActiveImg,
                  !animation ? css.In : null,
                  animation ? css.Out : null
                ].join(' ')} 
                alt="Active_Image"/>
            </div>
            <div className={css.InactiveImg}>
              <div className={css.ImgContainer}>
                <img src={`https://backendapi.turing.com/images/products/${!animation ? product.image : product.image_2 }`}
                  className={css.ActiveImgThumb}
                  alt="Active_Image_thumb" />
              </div>
              <div className={css.ImgContainer}>
                <img src={`https://backendapi.turing.com/images/products/${!animation ? product.image_2 : product.image }`}
                  onClick={changeImg}
                  className={[
                    !animation ? css.FadeIn : null,
                    animation ? css.FadeOut : null
                  ].join(' ')}
                  alt="Inactive_Image" />
              </div>
            </div>
          </div>

          <div className={css.ProductInfo}>
            <div className={css.ProductInfoHead}>
              { productLoc }
              <h2> { product.name } </h2>
              <span>
                <Stars stars={props.averageStars.toFixed(2)}/>
              </span>
              <p> { product.description } </p>
              <div className={css.Price}>
                <span className={product.discounted_price > 0 ? css.DiscountedPrice : null}> 
                  USD ${ product.price }
                </span>
                { product.discounted_price > 0 ? (
                  <span> USD ${ product.discounted_price } </span>
                ) : null }
              </div>
            </div>
            <div className={css.ProductInfoActions}>
              <div className={css.Attributes}>
                <span>Colors</span>
                <div className={css.Colors}>
                  { attributesColor }
                </div>
                <span>Sizes</span>
                <div className={css.Sizes}>
                  { attributesSize }
                </div> 
              </div>
              <div className={css.Quantity}>
                <span>Quantity</span>
                <div className={css.QuantityContainer}>
                  <div>
                    <BtnIcon 
                      iconType="fas"
                      icon="minus"
                      btnType="contained"
                      btnColor="secondary"
                      size="small"
                      iconSize="1.25rem"
                      disabled={props.count === 0}
                      clicked={props.quantity('Reduce')}
                    />
                  </div>
                  <span>{ props.count }</span>
                  <div>
                    <BtnIcon 
                      iconType="fas"
                      icon="plus"
                      btnType="contained"
                      btnColor="secondary"
                      size="small"
                      iconSize="1.25rem"
                      clicked={props.quantity('Add')}
                    />
                  </div>
                </div>
              </div>
              <div className={css.Actions}>
                <div className={css.AddCart}>
                  <Btn 
                    btnColor="primary"
                    btnType="contained"
                    size="large"
                    clicked={props.addCart}>
                    add to cart
                  </Btn>
                </div>
                <div className={css.AddFavorite}>
                  <BtnIcon
                    btnType={null}
                    iconType={props.addFav ? "fas" : "far"}
                    icon="heart"
                    iconSize="1.25rem"
                    iconColor="#ff1744"
                    clicked={props.addToFav}>
                    <span>{ props.addFav ? 'On Wish List!' : 'Add to Wish List' }</span>
                  </BtnIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    });

    let avrgStars = 0

    const AverageStar = () => {
      setAverageStars(avrgStars);
    }

    const reviews = props.reviews.map((reviews, key) => {
      const totalRating = [];
      let ratingVals = 0;
      ratingVals += reviews.rating;
      totalRating.push(reviews.rating);
      avrgStars = ratingVals / totalRating.length
      
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
          className={css.Review}
          onLoad={AverageStar}>
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
    <div className={css.ProductDetail}>
      { product }
      <div className={css.ProductReviews}>
        <h4>Product Reviews</h4>
        <div className={css.Reviews}>
          { reviews }
        </div>
        <div className={css.PostReview}>
          <h4>Add a Review</h4>
          <form onSubmit={props.submit} id={props.form}>
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
              size="medium">
              Submit
            </Btn>
          </form>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    isLoading: state.products.isLoading,
    averageStars: state.products.averageStars
  }
}

export default connect(mapStateToProps)(withRouter(ProductDetail));