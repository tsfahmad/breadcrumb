import React, {useState} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import propTypes from 'prop-types';

import './breadcrumb.css';

function SeparatorView () {
  return (<span className="breadcrumb-item-separator"> &gt; </span>);
}

function BreadcrumbItemView ({id, label, onItemClick}) {
  return (
      <div className="breadcrumb-item"
           onClick={() => {
             onItemClick(id)
           }}>
        {label}
      </div>
  );
}

function BreadcrumbView ({ items, onClick }) {

  const [anchorEl, setAnchorEl] = useState(null);

  const MAX_ITEMS_TO_SHOW = 4;
  const TOTAL_ITEMS = items.length;
  let IS_POPOVER_NEEDED = TOTAL_ITEMS > MAX_ITEMS_TO_SHOW;
  let itemDOMS = [];
  let itemsToShowInPopover = [];


  const onItemClick = (id) => {
    if(onClick){
      if(onClick instanceof Function) {
        onClick(id);
      }
      else {
        throw Error("onClick is not a valid function");
      }
    }
    handleClose();
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  items.forEach(({id, label}, index) => {

    let oItemDOM = (<BreadcrumbItemView key={id} id={id} label={label} onItemClick={onItemClick}/>);

    if(IS_POPOVER_NEEDED && index > 0 && index < TOTAL_ITEMS - 2) {
      itemsToShowInPopover.push(<MenuItem key={index}>{oItemDOM}</MenuItem>);
      if(index === 1) {
        itemDOMS.push(<span key={"more"} className="breadcrumb-item-dropdown-button" onClick={handleClick}> ... </span>);
        itemDOMS.push(<SeparatorView key={index} />);
      }
      return;
    }
    else {
      itemDOMS.push(oItemDOM);
    }


    if(index < TOTAL_ITEMS - 1) {
      itemDOMS.push(<SeparatorView key={index} />)
    }

  });

  return (
      <div className="breadcrumb-container">
        {itemDOMS}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          {itemsToShowInPopover}
        </Menu>
      </div>
  )
}

const PropTypes = {
  items: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        label: propTypes.string
      })
  ).isRequired,
  onClick: propTypes.func
};

BreadcrumbView.propTypes = PropTypes;

export default BreadcrumbView;