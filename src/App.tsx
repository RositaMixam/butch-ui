import React, { useEffect, useState } from 'react';
// import sampleJson from '../../';
import './App.css';
import { Button, Col, Form, Nav, Row, Tab, Table } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ErrorMessage, Field, Formik, useFormik } from 'formik';
import { AvailableEquipment } from './components/AvailableEquipment';
import * as Yup from 'yup';
import { getAllConfigs } from './api/butchPricing';
import { SheetsAndSizes } from './components/SheetsAndSizes';
import { Configurations } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('');
  const [data, setData] = useState<Configurations>();

  const doGetAllConfigs = () => getAllConfigs().then((res) => setData(res));

  useEffect(() => {
    doGetAllConfigs();
  }, []);

console.log("here it is", data)

  return (
    <div className={'p-3'}>
      <h1>Pricing</h1>
      <div className='App'>
        <div className='side-bar d-flex p-3 gap-2 flex-column text-decoration-none border-end'>
          <h3>Components</h3>
          <Button
            variant='outline-primary'
            active={activeTab === 'sheets'}
            onClick={() => setActiveTab('sheets')}
          >
            Sheets and Sizes
          </Button>
          <Button
            variant='outline-primary'
            active={activeTab === 'available-equipment'}
            onClick={() => setActiveTab('available-equipment')}
          >
            Available Equipment
          </Button>
          <Button
            variant='outline-primary'
            active={activeTab === 'lamination'}
            onClick={() => setActiveTab('lamination')}
          >
            Lamination
          </Button>
          <Button
            variant='outline-primary'
            active={activeTab === 'setup'}
            onClick={() => setActiveTab('setup')}
          >
            Component Set Up
          </Button>
        </div>
        <div className='p-4 d-fle  x flex-column'>
          <h4 className='text-end'>Machine: {data?.machineName}</h4>
          {/* {activeTab === 'sheets' && <SheetsAndSizes data={data}/>} */}

          {activeTab === 'available-equipment' && (
            <>
              <AvailableEquipment data={data} />
            </>
          )}
          {activeTab === 'setup' && (
            <Table>
              <thead>
                <tr>
                  <th>Component Type</th>
                  <th>Setup Sheets</th>
                </tr>
              </thead>
              <tbody>
                {data.componentSetupSheets.map((sheet) => {
                  return (
                    <tr key={sheet.componentType}>
                      <td>{sheet.componentType}</td>
                      <td>{sheet.setupSheets}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}

          {activeTab === 'lamination' && (
            <Table>
              <thead>
                <tr>
                  <th>Component Type</th>
                  <th>Cost</th>
                  <th>Lamination</th>
                </tr>
              </thead>
              <tbody>
                {data.laminationCosts.map((lamination) => {
                  return (
                    <tr
                      key={
                        lamination.cost +
                        lamination.componentType +
                        lamination.lamination
                      }
                    >
                      <td>{lamination.componentType}</td>
                      <td>{lamination.cost}</td>
                      <td>{lamination.lamination}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
