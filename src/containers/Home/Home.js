import React from 'react';

import Header from '../../components/Home/Header/Header';
import Main from '../../components/Home/Main/Main';

class Home extends React.Component {
  componentDidMount () {
    console.log(this.props);
  }

  seeSaleHandler = () => {
    this.props.history.push('/women');
  }
  
  render () {
    return (
      <React.Fragment>
        <Header />
        <Main 
          seeSale={this.seeSaleHandler} />
      </React.Fragment>
    );
  }
};

export default Home;