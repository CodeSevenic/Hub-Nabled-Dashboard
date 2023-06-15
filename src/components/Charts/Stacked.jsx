import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts/src';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = () => {
  return (
    <ChartComponent>
      <Inject services={[StackingColumnSeries, Legend, Category, Tooltip]} />
    </ChartComponent>
  );
};

export default Stacked;
