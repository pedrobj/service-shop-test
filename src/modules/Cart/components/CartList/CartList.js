import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import './CartList.scss';

// TODO: Abstrair
const formatCurrency = (value) => value.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const CartList = (props) => {
  if (!Object.keys(props.cart).length) {
    return <div className="CartList row" style={{ padding: '15px' }}>Empty Cart</div>;
  }
  let totalPrice = 0; // TODO: Refactor cart object
  return (
    <ul className="CartList row">
      {
        Object.keys(props.cart).map(product => {
          const productDetail = props.products.find(prod => prod.id === product);
          totalPrice += productDetail.price * props.cart[product];
          return (
            <li
              className="CartList-item"
              key={product}>
              <Link to={`/product/${productDetail.id}-${productDetail.slug}`}>
                {productDetail.name} ({productDetail.id})
              </Link>
              <span className="CartList-item-price">
                Price: {formatCurrency(productDetail.price)}
              </span>
              <span
                className="CartList-item-remove"
                onClick={() => props.onRemove(product)}>
                Remove
              </span>
              <input
                type="number"
                className="CartList-amount"
                value={props.cart[product]}
                onChange={(ev) => props.onUpdate(product, ev.target.value)} />
            </li>
          );
        })
      }
      <li>Total: {formatCurrency(totalPrice)}</li>
    </ul>
  );
};

CartList.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.object,
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default CartList;
