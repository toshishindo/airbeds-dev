import React from 'react';
import { NumberBox, DateRange, RangeSlider, DataSearch } from '@appbaseio/reactivesearch';

export default () => (
  <div className="left-col">
    <DataSearch
      componentId="Search"
      dataField="name"
      title="Search"
    />

    <DateRange
      dataField="date_from"
      componentId="DateRangeSensor"
      title="When"
      numberOfMonth={2}
      queryFormat="basic_date"
      initialMonth={new Date('04-01-2017')}
    /> 

    <NumberBox
      componentId="GuestSensor"
      dataField="accommodates"
      title="Guests"
      defaultSelected={2}
      labelPosition="right"
      data={{
        start: 1,
        end:6, 
      }}
    />

    <RangeSlider
      componentId="PriceSensor"
      dataField="price"
      title="Price Range"
      range={{
        start: 10, 
        end: 250,
      }}
      rangeLabels={{
        start: '$10',
        end: '$250',
      }}
      defaultSelected={{
        start: 10,
        end:50,
      }}
      stepValue={10}
      interval={20}
      react={{
        and:['DateRangeSensor'],
      }}
    />
  </div>
);