import React from 'react';
import './css/List.css';

import Item from './Item';

const List = ({data}) => {
  return (
    <div className="list">
        <div className="list-header-container"><h3>Get there on foot!</h3></div>
         <main role="main">
          <ul className="flexgrid columns-news">
        
        {
          data === undefined ? null :
          //filters the data right here
            data.results.filter(result => result.rating >=4)
            .map((result) =>
            <Item item={result} />
            )
          
        }

        </ul>
      </main>
    </div>
  );
};

export default List;
