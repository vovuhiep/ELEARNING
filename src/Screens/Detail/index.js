import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAction } from '../../Redux/Action.js';
import { FETCH_COURSE_DETAIL } from '../../Redux/Action.js/type';
import { courseService } from '../../Services';
import api from '../../utils/apiUtils.js';

class CourseDetailScreen extends Component {
  render() {
    return (
      <div>
        <img src={this.props.courseDetail.hinhAnh} alt="course detail" style={{ width: 600, height: 400, }} />
        <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
      </div>
    )
  }

  componentDidMount() {
    let maKhoaHoc=window.location.pathname.split('/')[window.location.pathname.split('/').length-1]

    // api.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    courseService
    .fetchCourseDetail1(maKhoaHoc)
      .then(
        res => {
          this.props.dispatch(createAction(FETCH_COURSE_DETAIL, res.data))
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      )
  }
}

const mapStateToProps = state => ({
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: '',
    tenKhoaHoc: '',
    hinhAnh: '',
    nguoiTao: {
      taiKhoan: '',
      hoTen: '',
    }
  }
})
export default connect(mapStateToProps)(CourseDetailScreen);
