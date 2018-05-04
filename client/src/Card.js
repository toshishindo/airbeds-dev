import React from "react";
import { ResultCard, SelectedFilters } from "@appbaseio/reactivesearch";

export default () => (
  <div>
    <SelectedFilters className="right-col" />
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
            <p className="info">
              {data.room_type} - {data.accommodates} guests
            </p>
          </div>
        ),
        url: data.listing_url
      })}
      pagination
      react={{
        and: ["GuestSensor", "PriceSensor", "DateRangeSensor", "Search"]
      }}
      innerClass={{
        resultStats: "result-stats",
        list: "list",
        listItem: "list-item",
        image: "image"
      }}
    />
  </div>
);
