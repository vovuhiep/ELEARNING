import React, { Component } from 'react';
import { Form, Formik, Field } from "formik";
import {connect} from "react-redux";
import { login } from '../../Redux/Action.js/user';

class SigninScreen extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                }}
                onSubmit={(values)=>{
                    this.props.dispatch(login(values))
                }}
                render={({handleChange}) => (
                    <Form className='w-50 mx-auto'>
                        <h1>Đăng nhập</h1>
                        <div className='form-group'>
                            <label>Tài khoản</label>
                            <Field type="text" name='taiKhoan' onChange={handleChange} className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Mật khẩu</label>
                            <Field type="text" name='matKhau' onChange={handleChange} className='form-control' />
                        </div>
                        <button className='btn btn-success'>Đăng nhập</button>
                    </Form>
                )}
            />
        )
    }
}
export default connect () (SigninScreen);