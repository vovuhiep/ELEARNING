import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CourseItem extends Component {
  render() {
    return (
      <div className='card p-2 mb-4'>
        <img src={this.props.item.hinhAnh} style={{width: "100%", height: 200}}/>
        <p className='lead font-weight-bold'>{this.props.item.tenKhoaHoc}</p>
        <p className='lead'>{this.props.item.nguoiTao.hoTen}</p>
        <p className='lead'>Rating: 5.0</p>
        <Link to={`/detail/${this.props.item.maKhoaHoc}`} className='btn btn-success'>Go to detail</Link>
      </div>
    )
  }
}
