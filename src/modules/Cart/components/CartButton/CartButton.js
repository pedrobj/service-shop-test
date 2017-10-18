import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { chackAndAddToCart } from '../../CartActions';

import './CartButton.scss';

const CartButton = (props) =>
  <button
    className="CartButton"
    onClick={() => props.dispatch(chackAndAddToCart(props.id, 1))}>
    Buy
  </button>;

CartButton.propTypes = {
  id: PropTypes.string.isRequired,
  chackAndAddToCart: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CartButton);
