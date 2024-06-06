import React from 'react';
import { Button, Table, Form as BsForm } from 'react-bootstrap';
import { Field, FieldArray, Form, Formik, FieldProps } from 'formik';
import { Configurations } from '../types';
// import sampleApi from '';



export function SheetsAndSizes(data: Configurations) {

  // getAllConfigs()

  const initalValuesSheetSizes = {
    pairs: [
      { height: 100, width: 10 },
      { height: 18, width: 2 },
      { height: 6, width: 0 },
    ],
  };

  const initialValuesItemSizes = {
    data: [
      {
        standardSize: sampleApi.standardSizes[0],
        component: sampleApi.componentTypes[0],
        // sheet: sampleApi.standardSizes[2],
        sides: 32,
      },
      {
        standardSize: sampleApi.standardSizes[1],
        component: sampleApi.componentTypes[5],
        // sheet: sampleApi.standardSizes[9],
        sides: 9,
      },
      {
        standardSize: sampleApi.standardSizes[2],
        component: sampleApi.componentTypes[6],
        // sheet: data.standardSizes[10],
        sides: 319,
      },
    ],
  };

  return (
    <div className='d-flex flex-column gap-4'>
      <div className='d-flex flex-column '>
        <h1>Sheet Sizes</h1>
        <Formik
          initialValues={initalValuesSheetSizes}
          onSubmit={(values) => console.log(values)}
        >
          {({ values }) => (
            <Form>
              <FieldArray
                name='pairs'
                render={(arrayHelpers) => (
                  <div className='d-flex flex-column'>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Height</th>
                          <th>Width</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {values.pairs.map((pair, index) => (
                          <tr key={index}>
                            {/** both these conventions do the same */}
                            <td>
                              <Field
                                type='text'
                                name={`pairs[${index}].height`}
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
                              <Field name={`pairs.${index}.width`}>
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
                                type='button'
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                -
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className='d-flex flex-row gap-2 justify-content-end'>
                      <Button
                        className='align-self-end'
                        type='button'
                        onClick={() =>
                          arrayHelpers.push({ height: '', width: '' })
                        }
                      >
                        + Add Sheet Size
                      </Button>
                      <Button
                        className='align-self-end'
                        type='button'
                        onClick={() => console.log('saved')}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                )}
              />
            </Form>
          )}
        </Formik>
      </div>

      <div>
        <h1>Item Sizes </h1>
        <Formik
          initialValues={initialValuesItemSizes}
          onSubmit={(values) => console.log(values)}
        >
          {({ values }) => (
            <Form>
              <FieldArray
                name='data'
                render={(arrayHelpers) => (
                  <div className='d-flex flex-column'>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Standard Size</th>
                          <th>Component</th>
                          <th>Sheet</th>
                          <th>Sides</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {values.data.map((pair, index) => (
                          <tr key={index}>
                            {/** both these conventions do the same */}
                            <td>
                              <Field
                                type='text'
                                name={`data[${index}].standardSize`}
                              >
                                {({
                                  field,
                                }: FieldProps<{
                                  data: {
                                    standardSize: string;
                                    component: string;
                                    sheet: string;
                                    sides: number;
                                  };
                                }>) => (
                                  <BsForm.Control
                                    {...field}
                                    type='text'
                                  ></BsForm.Control>
                                )}
                              </Field>
                            </td>
                            <td>
                              <Field name={`data[${index}].component`}>
                                {({ field }) => (
                                  <BsForm.Control
                                    {...field}
                                    type='text'
                                  ></BsForm.Control>
                                )}
                              </Field>
                            </td>{' '}
                            <td>
                              <Field name={`data[${index}].sheet`}>
                                {({ field }) => (
                                  <BsForm.Select {...field} type='text'>
                                    {initalValuesSheetSizes.pairs.map(
                                      (size) => {
                                        return (
                                          <option>
                                            {size.height}x{size.width}
                                          </option>
                                        );
                                      }
                                    )}
                                    {/* <option>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option> */}
                                  </BsForm.Select>
                                  // <Form.Select aria-label="Default select example">
                                  // </Form.Select>
                                )}
                              </Field>
                            </td>
                            <td>
                              <Field name={`data[${index}].sides`}>
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
                                type='button'
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                -
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <Button
                      className='align-self-end'
                      type='button'
                      onClick={() =>
                        arrayHelpers.push({ height: '', width: '' })
                      }
                    >
                      + Add Item Size
                    </Button>
                  </div>
                )}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
