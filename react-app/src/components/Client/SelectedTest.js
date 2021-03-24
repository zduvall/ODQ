import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import components
import SelectedDataPoint from './SelectedDataPoint';
import ModalInfoButton from '../ModalInfoButton';

// import context
import { useClientTestsContext } from '../../pages/Client';

// import thunk
import { toggleSeen } from '../../store/clients';

// import css
import './Client.css';

// import chart and annotator
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
Chart.plugins.register([ChartAnnotation]); // Global registering of plugin

export default function SelectedTest() {
  const dispatch = useDispatch();
  const [showInfoModal, setShowInfoModal] = useState();

  const {
    clientId,
    selectedTest,
    clientTests,
    datapoint,
    setDatapoint,
  } = useClientTestsContext();

  const allTestResOfType = clientTests.filter(
    (test) => test.testCode === selectedTest.code
  );

  const dates = [];

  function dateLabels(tests) {
    tests.forEach((test) => {
      let date = new Date(test.timeComp).toLocaleDateString();
      dates.push(date.slice(0, date.lastIndexOf('/') + 1) + date.slice(-2));
    });
    return dates;
  }

  const data = {
    labels: dateLabels(allTestResOfType),
    datasets: [
      {
        label: 'Test Scores',
        data: selectedTest.chartData.datapoints(allTestResOfType),
        fill: false,
        backgroundColor: 'rgb(238, 114, 32)',
        borderColor: 'rgb(242, 150, 88)',
        pointRadius: 4,
        pointHitRadius: 15,
      },
    ],
  };

  const options = selectedTest.chartOptions;

  // add chart options that exist on all charts
  selectedTest.chartOptions.onClick = (e, element) => {
    if (element[0]) {
      setDatapoint(allTestResOfType[element[0]._index]);
    }
  };
  selectedTest.chartOptions.onHover = (e, element) => {
    e.target.style.cursor = element[0] ? 'pointer' : 'default';
  };

  // make most recent data point (test res) default to being selected
  useEffect(() => {
    if (!datapoint && datapoint !== false) {
      setDatapoint(allTestResOfType[allTestResOfType.length - 1]);
    }
  }, [datapoint, setDatapoint, allTestResOfType]);

  // toggle all tests shown on this chart to be userSeen: true
  useEffect(() => {
    const unseenTests = allTestResOfType.filter((test) => !test.userSeen);
    if (unseenTests.length) {
      dispatch(toggleSeen(clientId, unseenTests));
    }
  }, [allTestResOfType, dispatch, clientId]);

  return (
    <>
      {showInfoModal && (
        <ModalInfoButton
          showModal={showInfoModal}
          setShowModal={setShowInfoModal}
          title={'Score Interpretation'}
          message={`${selectedTest.interpretation} \n\n(Note: click on individual datapoints to view test scores from that date)`}
        />
      )}
      <div className='site__sub-section flex-dir-col chart-container'>
        <i
          className='fas fa-info-circle top-right-grey'
          onClick={() => setShowInfoModal(true)}
        ></i>
        <h3 className='cntr-txt-sml-margin'>{selectedTest.name}</h3>
        <Line data={data} options={options} />
      </div>
      {datapoint && (
        <>
          <div className='one1rem-ht' />
          <SelectedDataPoint datapoint={datapoint} />
        </>
      )}
    </>
  );
}
