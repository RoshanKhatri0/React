import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const SignUp = () => {
  return (
    <>
    <Formik
        initialValues={{fname:'', lname:'', email:'', password:'', cpassword:''}}
        validationSchema={Yup.object({
            fname:Yup.string()
            .max(20, 'must be 20 characters or less')
            .required('fname is mandatory'),

            lname:Yup.string()
            .max(20, 'must be 20 characters or less')
            .required('lname is mandatory'),

            email:Yup.string()
            .email('invalid email format')
            .required('email is mandatory'),

            password:Yup.string()
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$?!])[A-Za-z\d@#$?!]{8,100}$/,
              'Password must contain at least one uppercase letter, one lowercase letter, one numeric digit, one special character, and be at least 8 characters long'
            )
            .required('Password is mandatory'),
          

            cpassword:Yup.string()
            .required('confirm password is mandatory')
            .oneOf([Yup.ref('password'),null],'password and confirm password doesnot match')
        })}
    >
        <div className="cointainer-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 shadow py-3">
                        <Form>
                            <div className="mb-2">
                                <label htmlFor="firstname">FirstName</label>
                                <Field type="text" name="fname" id="fname" className="form-control" />
                                <ErrorMessage name="fname">
                                    {msg => <div style={{color:'red'}}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="lastname">LastName</label>
                                <Field type="text" name="lname" id="lname" className="form-control" />
                                <ErrorMessage name="lname">
                                    {msg => <div style={{color:'red'}}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email">Email</label>
                                <Field type="text" name="email" id="email" className="form-control" />
                                <ErrorMessage name="email">
                                    {msg => <div style={{color:'red'}}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" id="fname" className="form-control" />
                                <ErrorMessage name="password">
                                    {msg => <div style={{color:'red'}}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <Field type="password" name="cpassword" id="cpassword" className="form-control" />
                                <ErrorMessage name="cpassword">
                                    {msg => <div style={{color:'red'}}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <button className='btn btn-primary' >SignUp</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
    </Formik>
        
    </>
  )
}

export default SignUp