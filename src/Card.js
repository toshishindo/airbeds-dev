import React from 'react';
import { ResultCard } from '@appbaseio/reactivesearch'

export default () => (
  <ResultCard
    className="right-col"
    componentId="SearchResult"
    dataField="name"
    size={12}
    onData={data => ({
      image: data.image,
      title: data.name,
      description: (
        <div>
          <div className="price">${data.price}</div>
          <p className="info">{data.room_type} - {data.accommodates} guests</p>
        </div>
      ),
      url: data.listing_url,
    })}
    pagination
    react={{
      and: ['GuestSensor', 'PriceSensor', 'DateRangeSensor', 'search'],
    }}
    innerClass={{
      resultStats: 'result-stats',
      list: 'list',
      listItem: 'list-item',
      image: 'image',
    }}
  />
);