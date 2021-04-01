import React from 'react';
import cx from 'classnames';
import './ImageListItemS.scss';

const ImageListItem = ({
  imgContainer, handleChange, id, isSelected,
}) => {
  const handleItemClick = () => {
    handleChange(id);
  };

  return (
    <div className={cx('ImageListItem', { active: isSelected })}>
      <div onClick={handleItemClick} className="ImageListButton" role="img">
        <img src={imgContainer.product_image} alt="test" />
      </div>
    </div>
  );
};

export default ImageListItem;
