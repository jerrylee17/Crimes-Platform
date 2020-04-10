import React from 'react';
import { Card, Container } from 'reactstrap';
import './Stats.css';
//import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  RadialChart,
  VerticalBarSeries
} from 'react-vis';

const Stats = () => {
  return (
    <Container style={{ height: '100%', padding: '0px' }}>
      <h1>Statistics</h1>
      <hr style={{ backgroundColor: 'white' }} />
      <Container className='grid'>
        <Card className='postCardStyle'>
          <XYPlot
            width={450}
            height={300}
            yDomain={[0, 1]}
            //className="clustered-stacked-bar-chart-example"
            xType="ordinal"
            stackBy="y"
            className='bar'
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title='hi' />
            <YAxis />
            <VerticalBarSeries
              color='#b8db91'
              data={[
                { x: 'Vandalism', y: .2 },
                { x: 'Hate Speech', y: .5 },
                { x: 'Attacks', y: .2 },
                { x: 'Miscellaneous', y: .1 }
              ]}
            />
          </XYPlot>
        </Card>
        <Card className='postCardStyle'>

          <XYPlot height={300} width={450} xType='time'>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis className='line' />
            <YAxis className='bar' />
            <LineSeries data={[
              { x: new Date('01/01/2020'), y: 2 },
              { x: new Date('01/15/2020'), y: 4 },
              { x: new Date('02/01/2020'), y: 20 },
              { x: new Date('02/15/2020'), y: 36 },
              { x: new Date('03/01/2020'), y: 47 },
              { x: new Date('3/15/2020'), y: 56 },
              { x: new Date('04/01/2020'), y: 105 },
              { x: new Date('04/09/2020'), y: 150 }
            ]} />
          </XYPlot>
        </Card>
        <Card className='postCardStyle'>
          <RadialChart
            data={[
              { angle: 2, label: 'Vandalism' },
              { angle: 2, label: 'Attacks' },
              { angle: 1, label: 'Miscellaneous' },
              { angle: 5, label: 'Hate Speech' }
            ]}
            width={300}
            height={300}
            showLabels={true}
          >
          </RadialChart>
        </Card>
      </Container>
    </Container>
  );
};
export default Stats;