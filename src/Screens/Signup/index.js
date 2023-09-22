import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {userService} from "../../Services"
import { signupUserShema } from '../../Services/user';



class SignupScreen extends Component {
    _handleSubmit = values => {
        userService
        .signUp(values)
        .then( res => {
            console.log(res);
        })
        .catch( err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div className='w-50 mx-auto'>
                <h1 className='display-4 text-center'>Đăng ký</h1>
                <Formik
                    initialValues={{
                        taiKhoan: "",
                        matKhau: "",
                        hoTen: "",
                        email: "",
                        soDT: "",
                        maNhom: "GP01"
                    }}
                    validationSchema={signupUserShema}
                    onSubmit={this._handleSubmit}
                    render={(formikProps) => (
                        <Form>
                            <div className='form-group'>
                                <label>Tài khoản: </label>
                                <Field
                                    type="text"
                                    className='form-control'
                                    name='taiKhoan'
                                    onChange={formikProps.handleChange} />
                                <ErrorMessage name='taiKhoan'>
                                    {msg => <div className='alert alert-danger'>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className='form-group'>
                                <label>Mật khẩu: </label>
                                <Field
                                    type="password"
                                    className='form-control'
                                    name='matKhau'
                                    onChange={formikProps.handleChange} />
                                <ErrorMessage name='matKhau'>
                                    {msg => <div className='alert alert-danger'>{msg}</div>}
                                </ErrorMessage>                                
                            </div>
                            <div className='form-group'>
                                <label>Họ tên: </label>
                                <Field
                                    type="text"
                                    className='form-control'
                                    name='hoTen'
                                    onChange={formikProps.handleChange} />
                                <ErrorMessage name='hoTen'>
                                    {msg => <div className='alert alert-danger'>{msg}</div>}
                                </ErrorMessage> 
                            </div>
                            <div className='form-group'>
                                <label>Email: </label>
                                <Field
                                    type="email"
                                    className='form-control'
                                    name='email'
                                    onChange={formikProps.handleChange} />
                                <ErrorMessage name='email'>
                                    {msg => <div className='alert alert-danger'>{msg}</div>}
                                </ErrorMessage> 
                            </div>
                            <div className='form-group'>
                                <label>Số điện thoại: </label>
                                <Field
                                    type="text"
                                    className='form-control'
                                    name='soDT'
                                    onChange={formikProps.handleChange} />
                                <ErrorMessage name='soDT'>
                                    {msg => <div className='alert alert-danger'>{msg}</div>}
                                </ErrorMessage> 
                            </div>
                            <div className='form-group'>
                                <label>Mã nhóm: </label>
                                {/* <Field className='form-control' name="maNhom" onChange={formikProps.handleChange}>
                                    <option>GP01</option>
                                    <option>GP02</option>
                                    <option>GP03</option>
                                    <option>GP04</option>
                                    <option>GP05</option>
                                    <option>GP06</option>
                                    <option>GP07</option>
                                    <option>GP08</option>
                                    <option>GP09</option>
                                    <option>GP10</option>
                                </Field> */}
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-success'>Submit</button>
                            </div>
                        </Form>)} />
            </div>
        )
    }
}
export default SignupScreen;
