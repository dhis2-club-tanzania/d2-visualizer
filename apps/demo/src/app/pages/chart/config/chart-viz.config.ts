import { ChartConfiguration } from '../models/chart-configuration.model';

export const chartConfigurations: ChartConfiguration = {
  renderId: 'visualization-container',
  type: 'column',
  title: 'PMTCT: Percentage of ANC HIV Testing and Treatment',
  subtitle: '',
  hideTitle: false,
  hideSubtitle: false,
  showData: true,
  hideEmptyRows: true,
  hideLegend: false,
  cumulativeValues: false,
  targetLineLabel: '',
  baseLineLabel: '',
  legendAlign: 'bottom',
  reverseLegend: false,
  showLabels: true,
  axes: [],
  sortOrder: 0,
  percentStackedValues: false,
  multiAxisTypes: [],
  xAxisType: ['ou'],
  yAxisType: 'dx',
  zAxisType: ['pe'],
  touched: true,
};
