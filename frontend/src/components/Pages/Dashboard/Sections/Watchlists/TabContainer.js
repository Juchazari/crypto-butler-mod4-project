import React from 'react';

const TabContainer = (props) => {
  return (
    <div className="tab-container">
      {props.watchlists.map((watchlist) => {
        return (
          <div
            className="tc-tab-name"
            key={watchlist.id}
            onClick={() => props.clickWatchlistTab(watchlist)}
          >
            <h3>{watchlist.name}</h3>
          </div>
        );
      })}
      <div
        className="tc-tab-name create-new-tab"
        onClick={props.createWatchList}
      >
        <i className="fa fa-plus"></i>
      </div>
    </div>
  );
};

export default TabContainer;
