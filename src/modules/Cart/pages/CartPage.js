import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import CartList from '../components/CartList/CartList';

// Import Actions
import { removeFromCart, updateCartAmount } from '../CartActions';
import { fetchProducts } from '../../Product/ProductActions';

import './CartPage.scss';

class CartPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="CartPage loading" />
      );
    }
    return (
      <div className="CartPage">
        <div className="breadcrumb row"><Link to="/">Home</Link> / Cart</div>
        <div className="CartPage-title row">
          Cart Products
        </div>
        <CartList
          cart={this.props.cart}
          products={this.props.products}
          onRemove={this.props.removeFromCart}
          onUpdate={this.props.updateCartAmount} />
      </div>
    );
  }
}

// Retrieve data from store as props
const mapStateToProps = (state) => ({
  cart: state.cart.products,
  loading: state.product.loading,
  products: state.product.products,
});

// Retrieve dispatch actions as props
const mapDispatchToProps = (dispatch) => bindActionCreators(
  { removeFromCart, updateCartAmount, fetchProducts }, dispatch
);

CartPage.propTypes = {
  cart: PropTypes.object,
  products: PropTypes.array,
  loading: PropTypes.bool,
  removeFromCart: PropTypes.func,
  updateCartAmount: PropTypes.func,
  fetchProducts: PropTypes.func,
};

CartPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
