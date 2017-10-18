import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

// Import Components
import ProductList from '../components/ProductList/ProductList';
import PostListCategory from '../components/ProductListCategory';

// Import Actions
import { fetchProducts, changeFilter } from '../ProductActions';

// Import Selectors
import { getTotalProducts } from '../ProductReducer';

import './ProductListPage.scss';

const categories = ['', 'category 1', 'category 2', 'category 3'];

class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="ProductListPage">
        <div className="breadcrumb row"><Link to="/">Home</Link></div>
        <div className="ProductListPage-title row">
          Services Available
          <Link
            to="/cart"
            className="ProductListPage-cart">
            Cart ({getTotalProducts(this.props.cart)})
          </Link>
        </div>
        <PostListCategory
          categories={categories}
          active={this.props.category}
          handleClick={this.props.changeFilter} />
        <ProductList
          products={this.props.products}
          loading={this.props.loading} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ProductListPage.need = [() => fetchProducts()];

// Retrieve data from store as props
const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
  category: state.product.category,
  cart: state.cart.products,
});

// Retrieve dispatch actions as props
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchProducts, changeFilter }, dispatch);

ProductListPage.propTypes = {
  loading: PropTypes.bool,
  category: PropTypes.string,
  cart: PropTypes.object,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
  fetchProducts: PropTypes.func.isRequired,
  chackAndAddToCart: PropTypes.func,
  changeFilter: PropTypes.func,
};

ProductListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
