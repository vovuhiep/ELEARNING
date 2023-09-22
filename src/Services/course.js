import axios from "axios";
import api from "../utils/apiUtils";
class CourseService {
    fetchCourse(){
        return axios({
            method: "GET",
            url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            headers:{
                TokenCybersoft:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE4LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTUzNjAwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1NjgzNjAwfQ.s4X0R0Wi80X0f9MLJ2XYxRKJdQJBW27dwvkpfN03100'
            }
        })
    }
    fetchCourseDetail(){
        return axios({
            method: "GET",
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=123131399990000',
            headers:{
                TokenCybersoft:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE4LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTUzNjAwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1NjgzNjAwfQ.s4X0R0Wi80X0f9MLJ2XYxRKJdQJBW27dwvkpfN03100'
            }
        })
    }
    fetchCourseDetail1(maKhoaHoc){
        return api.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    }
}
export default CourseService;