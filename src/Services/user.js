import { Axios } from "axios";
import * as yup from "yup";



export const signupUserShema = yup.object().shape({
    taiKhoan: yup.string().required('*Vui lòng nhập kí tự'),
    matKhau: yup.string().required('Vui lòng nhập kí tự'),
    email: yup.string().required('Vui lòng nhập').email('Vui lòng nhập đúng email'),
    soDT: yup.number().required('Vui lòng nhập số điện thoại'),
    maNhom: yup.string().required('Vui lòng nhập kí tự')
})
class UserService {
    signUp(data){
        return Axios({
            method: "POST",
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data
        })
    }
    signIn(user){
        return Axios({
            method: "POST",
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: user
        })
    }
}
export default UserService;