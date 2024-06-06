import React from 'react';
import { Formik, Form, Field, FieldArray, useFormikContext } from 'formik';
// import sampleJson from '/sampleApi.json';
import { Button, Table, Form as BsForm } from 'react-bootstrap';
import { getAllConfigs } from '../api/butchPricing';
import { Configurations } from '../types';



const Test = () => {
  const { values } = useFormikContext();
  console.log(values);
  return <div>test</div>;
};

export const AvailableEquipment = ({data}: Configurations) => {
console.log('AvailableEquipment',data)
// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
const initialValues = {
  bindingMachine: data.data.availableEquipment.bindingMachines.map(
    (machine) => ({
      name: machine.name,
      cost: machine.hourlyEquipmentCost,
      bindingType: machine.bindingType,
    })
  ),
};



  return (
    <div>
      <h1>Binding Machine</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values }) => (
          <Form>
            <FieldArray
              name='bindingMachine'
              render={(arrayHelpers) => (
                <div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Binding Type</th>
                        <th>
                          <Test></Test>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {values.bindingMachine.map((machine, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <Field name={`bindingMachine[${index}].name`}>
                                {({ field }) => (
                                  <BsForm.Control
                                    {...field}
                                    type='text'
                                  ></BsForm.Control>
                                )}
                              </Field>
                            </td>
                            <td>
                              <Field
                                type='text'
                                name={`bindingMachine.${index}.cost`}
                              >
                                {({ field }) => (
                                  <BsForm.Control
                                    {...field}
                                    type='text'
                                  ></BsForm.Control>
                                )}
                              </Field>
                            </td>
                            <td>
                              <Field
                                type='text'
                                name={`bindingMachine.${index}.bindingType`}
                              >
                                {({ field }) => (
                                  <BsForm.Control
                                    {...field}
                                    type='text'
                                  ></BsForm.Control>
                                )}
                              </Field>
                            </td>
                            <td>
                              <Button
                                variant='danger'
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                -
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>

                  <Button
                    onClick={() => arrayHelpers.push({ name: '', cost: '' })}
                  >
                    +
                  </Button>
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
