import React from 'react';
import PropTypes from 'prop-types';

const isActive = (category, active) => (category === active
  ? 'ProductListPage-category-item-active' : '');

function PostListCategory(props) {
  return (
    <div className="ProductListPage-category row">
      {
        props.categories.map(category => (
          <span
            key={category}
            className={`ProductListPage-category-item ${isActive(category, props.active)}`}
            onClick={() => props.handleClick(category)}>
            {category || 'All'}
          </span>
        ))
      }
    </div>
  );
}

PostListCategory.propTypes = {
  categories: PropTypes.array.isRequired,
  active: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default PostListCategory;
