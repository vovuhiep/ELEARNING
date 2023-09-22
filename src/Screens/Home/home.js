import React, { Component } from 'react'
import CourseItem from '../../Components/CourseItems'
import {connect} from 'react-redux'
import { courseService } from '../../Services'
import { createAction } from '../../Redux/Action.js'
import { FETCH_COURSE } from '../../Redux/Action.js/type'

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className='display-4 text-center'>Danh sách Khóa học</h1>
        <div className='container'>
          <div className='row'>
            {this.props.courseList.map((item, index) => (
              <div className='col-3'>
                <CourseItem item={item}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    courseService
      .fetchCourse()
      .then(res => {
        this.props.dispatch(createAction(FETCH_COURSE, res.data))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

const mapStateToProps = (state) => ({
  courseList: state.course.course
});
export default connect(mapStateToProps) (HomeScreen);