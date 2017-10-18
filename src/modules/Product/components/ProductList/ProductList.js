import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import ProductListItem from '../ProductListItem/ProductListItem';

// Import Style
import './ProductList.scss';

function ProductList(props) {
  if (props.loading) {
    return <div className="ProductList row loading" />;
  }
  return (
    <div className="ProductList row">
      {
        props.products.map(product => (
          <ProductListItem
            product={product}
            key={product.id} />
        ))
      }
    </div>
  );
}

ProductList.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductList;
