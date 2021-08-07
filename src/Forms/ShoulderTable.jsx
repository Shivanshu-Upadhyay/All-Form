import React from "react";
import { Table } from 'react-bootstrap';
import { Form, Field } from "react-final-form";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ShoulderTable() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  return (
    <div>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="">
             
              <h4> <u >Strength & ROM</u> </h4>
             
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className='text-center pb-4' rowSpan='2'> <h5>Movements</h5> </th>
                    <th colSpan='3' className='text-center'>Left</th>
                    <th colSpan='3' className='text-center' >Right</th>

                    
                  </tr>

                  
                  <tr>
                    
                    <th>
                        MMT(Strength)
                    </th>
                    
                    <th>
                        Active(ROM)
                    </th>
                    <th>
                         Passive(ROM)
                    </th>

                    <th>
                        MMT(Strength)
                    </th>

                    <th>
                        Active(ROM)
                    </th>
                    <th>
                        Passive(ROM)
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Flexion</th>

                    <th>
                    <Field name="o">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="p">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="q">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="r">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                    <th>
                    <Field name="rxx">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                    <th>
                    <Field name="rxy">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>

                  

<tr>
                    <th scope="row">Extension</th>

                    <th>
                    <Field name="oa">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="pa">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="qa">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="ra">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                    <th>
                    <Field name="ray">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                    <th>
                    <Field name="rax">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>



                    <tr>
                    <th scope="row">Adduction</th>

                    <th>
                    <Field name="ob">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="pb">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="qb">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="rb">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                     <th>
                    <Field name="rbx">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                     <th>
                    <Field name="rby">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                  </tr>



                    <tr>
                    <th scope="row">Abduction</th>

                    <th>
                    <Field name="oc">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="pc">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="qc">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="rc">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                      <th>
                    <Field name="rcx">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

       
                      <th>
                    <Field name="rcy">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                  </tr>
                    <tr>
                    <th scope="row">External Rotation</th>

                    <th>
                    <Field name="oc7">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="pc7">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="qc7">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="rc7">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                      <th>
                    <Field name="rcx7">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

       
                      <th>
                    <Field name="rcy7">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                  </tr>
                    <tr>
                    <th scope="row">Internal Rotation</th>

                    <th>
                    <Field name="oc8">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                         
                    </th>
                    <th>
                    <Field name="pc8">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                    <th>
                    <Field name="qc8">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                          
                    </th>
                    <th>
                    <Field name="rc8">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>
                    
                      <th>
                    <Field name="rcx8">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

       
                      <th>
                    <Field name="rcy8">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                           
                    </th>

                  </tr>

                   

                    
                </thead>

   
          
              </Table>                   
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}
export default ShoulderTable;