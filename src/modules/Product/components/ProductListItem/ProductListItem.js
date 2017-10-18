import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import CartButton from '../../../Cart/components/CartButton/CartButton';

const formatCurrency = (value) => value.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const PostListItem = (props) =>
  <div className="PostListItem col-md-4 col-sm-6 col-xs-12">
    <Link to={`/product/${props.product.slug}-${props.product.id}`} >
      <h3 className="PostListItem-name">{props.product.name}</h3>
      <span className="PostListItem-category">{props.product.category}</span>
      <span className="PostListItem-desc">{props.product.description}</span>
      <span className="PostListItem-price">{formatCurrency(props.product.price)}</span>
    </Link>
    <CartButton id={props.product.id} />
  </div>;

PostListItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostListItem;
