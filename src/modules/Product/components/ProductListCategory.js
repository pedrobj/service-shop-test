import React from 'react';
import PropTypes from 'prop-types';

function PostListCategory(props) {
  return (
    <div className="ProductListPage-category row">
      {
        props.categories.map(category => (
          <span
            key={category}
            className="ProductListPage-category-item"
            onClick={props.handleClick(category)}>
            {category}
          </span>
        ))
      }
    </div>
  );
}

PostListCategory.propTypes = {
  categories: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PostListCategory;
