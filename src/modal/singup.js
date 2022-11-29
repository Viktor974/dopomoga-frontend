import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './index.css'
import './main.js'

import img from './lock-eye.svg'
import facebook from '../Components/svg/facebook.svg'
import google from '../Components/svg/google.svg'

export default class SingUp extends Component {
    constructor(props){
        super (props)
        this.state={
            fullName:"",
            email:"",
            login:"",
            password:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        const {fullName,email,login,password} = this.state
        console.log(fullName,email,login,password)
        fetch("http://localhost:4444/reg",{
            method:"POST",
            crossDomain:true,
            body:JSON.stringify({
                fullName,
                login,
                email,
                password
            }),
        }).then((res)=>res.json())
            .then((data)=>{
                console.log(data, "UserReg")
            })
    }

    render() {
        return(
            <div className="modal active">
                <div className="m-content3 active center">
                    <form onSubmit={this.handleSubmit}>
                        <div className="m-all">
                            <svg width="136" height="16" viewBox="0 0 136 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.71094 1.64844H8.24219C8.91927 1.64844 9.54427 1.76042 10.1172 1.98438C10.6901 2.20312 11.1875 2.52083 11.6094 2.9375C12.0365 3.34896 12.3672 3.84635 12.6016 4.42969C12.8359 5.00781 12.9531 5.65365 12.9531 6.36719C12.9531 7.0651 12.8359 7.70052 12.6016 8.27344C12.3672 8.84115 12.0365 9.32812 11.6094 9.73438C11.1875 10.1406 10.6901 10.4531 10.1172 10.6719C9.54427 10.8906 8.91927 11 8.24219 11H5.71094C5.02865 11 4.40104 10.8906 3.82812 10.6719C3.25521 10.4531 2.75521 10.1432 2.32812 9.74219C1.90104 9.33594 1.56771 8.84896 1.32812 8.28125C1.09375 7.71354 0.976562 7.08073 0.976562 6.38281C0.976562 5.66927 1.09375 5.02344 1.32812 4.44531C1.56771 3.86198 1.90104 3.36198 2.32812 2.94531C2.75521 2.52865 3.25521 2.20833 3.82812 1.98438C4.40104 1.76042 5.02865 1.64844 5.71094 1.64844ZM5.71094 3.52344C5.21094 3.52344 4.77083 3.63281 4.39062 3.85156C4.01042 4.07031 3.71615 4.39323 3.50781 4.82031C3.29948 5.24219 3.19531 5.76302 3.19531 6.38281C3.19531 6.83073 3.25521 7.22656 3.375 7.57031C3.5 7.90885 3.67448 8.19271 3.89844 8.42188C4.1224 8.65104 4.38802 8.82552 4.69531 8.94531C5.0026 9.0651 5.34115 9.125 5.71094 9.125H8.25781C8.7526 9.125 9.1849 9.01823 9.55469 8.80469C9.92969 8.59115 10.2214 8.27865 10.4297 7.86719C10.638 7.45573 10.7422 6.95573 10.7422 6.36719C10.7422 5.90365 10.6823 5.49479 10.5625 5.14062C10.4427 4.78646 10.2734 4.48958 10.0547 4.25C9.83594 4.01042 9.57292 3.83073 9.26562 3.71094C8.96354 3.58594 8.6276 3.52344 8.25781 3.52344H5.71094ZM8.10156 0.15625V12.4688H5.85156V0.15625H8.10156ZM13.9922 7.85938V7.69531C13.9922 7.07552 14.0807 6.50521 14.2578 5.98438C14.4349 5.45833 14.6927 5.0026 15.0312 4.61719C15.3698 4.23177 15.7865 3.93229 16.2812 3.71875C16.776 3.5 17.3438 3.39062 17.9844 3.39062C18.625 3.39062 19.1953 3.5 19.6953 3.71875C20.1953 3.93229 20.6146 4.23177 20.9531 4.61719C21.2969 5.0026 21.5573 5.45833 21.7344 5.98438C21.9115 6.50521 22 7.07552 22 7.69531V7.85938C22 8.47396 21.9115 9.04427 21.7344 9.57031C21.5573 10.0911 21.2969 10.5469 20.9531 10.9375C20.6146 11.3229 20.1979 11.6224 19.7031 11.8359C19.2083 12.0495 18.6406 12.1562 18 12.1562C17.3594 12.1562 16.7891 12.0495 16.2891 11.8359C15.7943 11.6224 15.375 11.3229 15.0312 10.9375C14.6927 10.5469 14.4349 10.0911 14.2578 9.57031C14.0807 9.04427 13.9922 8.47396 13.9922 7.85938ZM16.2422 7.69531V7.85938C16.2422 8.21354 16.2734 8.54427 16.3359 8.85156C16.3984 9.15885 16.4974 9.42969 16.6328 9.66406C16.7734 9.89323 16.9557 10.0729 17.1797 10.2031C17.4036 10.3333 17.6771 10.3984 18 10.3984C18.3125 10.3984 18.5807 10.3333 18.8047 10.2031C19.0286 10.0729 19.2083 9.89323 19.3438 9.66406C19.4792 9.42969 19.5781 9.15885 19.6406 8.85156C19.7083 8.54427 19.7422 8.21354 19.7422 7.85938V7.69531C19.7422 7.35156 19.7083 7.02865 19.6406 6.72656C19.5781 6.41927 19.4766 6.14844 19.3359 5.91406C19.2005 5.67448 19.0208 5.48698 18.7969 5.35156C18.5729 5.21615 18.3021 5.14844 17.9844 5.14844C17.6667 5.14844 17.3958 5.21615 17.1719 5.35156C16.9531 5.48698 16.7734 5.67448 16.6328 5.91406C16.4974 6.14844 16.3984 6.41927 16.3359 6.72656C16.2734 7.02865 16.2422 7.35156 16.2422 7.69531ZM25.6328 5.17188V15.25H23.3828V3.54688H25.4688L25.6328 5.17188ZM30.9844 7.67969V7.84375C30.9844 8.45833 30.9115 9.02865 30.7656 9.55469C30.625 10.0807 30.4167 10.5391 30.1406 10.9297C29.8646 11.3151 29.5208 11.6172 29.1094 11.8359C28.7031 12.0495 28.2344 12.1562 27.7031 12.1562C27.1875 12.1562 26.7396 12.0521 26.3594 11.8438C25.9792 11.6354 25.6589 11.3438 25.3984 10.9688C25.1432 10.5885 24.9375 10.1484 24.7812 9.64844C24.625 9.14844 24.5052 8.61198 24.4219 8.03906V7.60938C24.5052 6.99479 24.625 6.43229 24.7812 5.92188C24.9375 5.40625 25.1432 4.96094 25.3984 4.58594C25.6589 4.20573 25.9766 3.91146 26.3516 3.70312C26.7318 3.49479 27.1771 3.39062 27.6875 3.39062C28.224 3.39062 28.6953 3.49219 29.1016 3.69531C29.513 3.89844 29.8568 4.1901 30.1328 4.57031C30.4141 4.95052 30.625 5.40365 30.7656 5.92969C30.9115 6.45573 30.9844 7.03906 30.9844 7.67969ZM28.7266 7.84375V7.67969C28.7266 7.32031 28.6953 6.98958 28.6328 6.6875C28.5755 6.38021 28.4818 6.11198 28.3516 5.88281C28.2266 5.65365 28.0599 5.47656 27.8516 5.35156C27.6484 5.22135 27.401 5.15625 27.1094 5.15625C26.8021 5.15625 26.5391 5.20573 26.3203 5.30469C26.1068 5.40365 25.9323 5.54688 25.7969 5.73438C25.6615 5.92188 25.5599 6.14583 25.4922 6.40625C25.4245 6.66667 25.3828 6.96094 25.3672 7.28906V8.375C25.3932 8.76042 25.4661 9.10677 25.5859 9.41406C25.7057 9.71615 25.8906 9.95573 26.1406 10.1328C26.3906 10.3099 26.7188 10.3984 27.125 10.3984C27.4219 10.3984 27.6719 10.3333 27.875 10.2031C28.0781 10.0677 28.2422 9.88281 28.3672 9.64844C28.4974 9.41406 28.5885 9.14323 28.6406 8.83594C28.6979 8.52865 28.7266 8.19792 28.7266 7.84375ZM37.5234 9.41406L39.7422 3.54688H41.5781L38.2812 12H36.7656L33.4844 3.54688H35.3203L37.5234 9.41406ZM34.7812 3.54688V12H32.5312V3.54688H34.7812ZM40.3203 12V3.54688H42.5703V12H40.3203ZM49.1016 10.0938V6.32812C49.1016 6.05729 49.0573 5.82552 48.9688 5.63281C48.8802 5.4349 48.7422 5.28125 48.5547 5.17188C48.3724 5.0625 48.1354 5.00781 47.8438 5.00781C47.5938 5.00781 47.3776 5.05208 47.1953 5.14062C47.013 5.22396 46.8724 5.34635 46.7734 5.50781C46.6745 5.66406 46.625 5.84896 46.625 6.0625H44.375C44.375 5.70312 44.4583 5.36198 44.625 5.03906C44.7917 4.71615 45.0339 4.43229 45.3516 4.1875C45.6693 3.9375 46.0469 3.74219 46.4844 3.60156C46.9271 3.46094 47.4219 3.39062 47.9688 3.39062C48.625 3.39062 49.2083 3.5 49.7188 3.71875C50.2292 3.9375 50.6302 4.26562 50.9219 4.70312C51.2188 5.14062 51.3672 5.6875 51.3672 6.34375V9.96094C51.3672 10.4245 51.3958 10.8047 51.4531 11.1016C51.5104 11.3932 51.5938 11.6484 51.7031 11.8672V12H49.4297C49.3203 11.7708 49.237 11.4844 49.1797 11.1406C49.1276 10.7917 49.1016 10.4427 49.1016 10.0938ZM49.3984 6.85156L49.4141 8.125H48.1562C47.8594 8.125 47.6016 8.15885 47.3828 8.22656C47.1641 8.29427 46.9844 8.39062 46.8438 8.51562C46.7031 8.63542 46.599 8.77604 46.5312 8.9375C46.4688 9.09896 46.4375 9.27604 46.4375 9.46875C46.4375 9.66146 46.4818 9.83594 46.5703 9.99219C46.6589 10.1432 46.7865 10.263 46.9531 10.3516C47.1198 10.4349 47.3151 10.4766 47.5391 10.4766C47.8776 10.4766 48.1719 10.4089 48.4219 10.2734C48.6719 10.138 48.8646 9.97135 49 9.77344C49.1406 9.57552 49.2135 9.38802 49.2188 9.21094L49.8125 10.1641C49.7292 10.3776 49.6146 10.599 49.4688 10.8281C49.3281 11.0573 49.1484 11.2734 48.9297 11.4766C48.7109 11.6745 48.4479 11.8385 48.1406 11.9688C47.8333 12.0938 47.4688 12.1562 47.0469 12.1562C46.5104 12.1562 46.0234 12.0495 45.5859 11.8359C45.1536 11.6172 44.8099 11.3177 44.5547 10.9375C44.3047 10.5521 44.1797 10.1146 44.1797 9.625C44.1797 9.18229 44.263 8.78906 44.4297 8.44531C44.5964 8.10156 44.8411 7.8125 45.1641 7.57812C45.4922 7.33854 45.901 7.15885 46.3906 7.03906C46.8802 6.91406 47.4479 6.85156 48.0938 6.85156H49.3984ZM59.3359 5.17188V15.25H57.0859V3.54688H59.1719L59.3359 5.17188ZM64.6875 7.67969V7.84375C64.6875 8.45833 64.6146 9.02865 64.4688 9.55469C64.3281 10.0807 64.1198 10.5391 63.8438 10.9297C63.5677 11.3151 63.224 11.6172 62.8125 11.8359C62.4062 12.0495 61.9375 12.1562 61.4062 12.1562C60.8906 12.1562 60.4427 12.0521 60.0625 11.8438C59.6823 11.6354 59.362 11.3438 59.1016 10.9688C58.8464 10.5885 58.6406 10.1484 58.4844 9.64844C58.3281 9.14844 58.2083 8.61198 58.125 8.03906V7.60938C58.2083 6.99479 58.3281 6.43229 58.4844 5.92188C58.6406 5.40625 58.8464 4.96094 59.1016 4.58594C59.362 4.20573 59.6797 3.91146 60.0547 3.70312C60.4349 3.49479 60.8802 3.39062 61.3906 3.39062C61.9271 3.39062 62.3984 3.49219 62.8047 3.69531C63.2161 3.89844 63.5599 4.1901 63.8359 4.57031C64.1172 4.95052 64.3281 5.40365 64.4688 5.92969C64.6146 6.45573 64.6875 7.03906 64.6875 7.67969ZM62.4297 7.84375V7.67969C62.4297 7.32031 62.3984 6.98958 62.3359 6.6875C62.2786 6.38021 62.1849 6.11198 62.0547 5.88281C61.9297 5.65365 61.763 5.47656 61.5547 5.35156C61.3516 5.22135 61.1042 5.15625 60.8125 5.15625C60.5052 5.15625 60.2422 5.20573 60.0234 5.30469C59.8099 5.40365 59.6354 5.54688 59.5 5.73438C59.3646 5.92188 59.263 6.14583 59.1953 6.40625C59.1276 6.66667 59.0859 6.96094 59.0703 7.28906V8.375C59.0964 8.76042 59.1693 9.10677 59.2891 9.41406C59.4089 9.71615 59.5938 9.95573 59.8438 10.1328C60.0938 10.3099 60.4219 10.3984 60.8281 10.3984C61.125 10.3984 61.375 10.3333 61.5781 10.2031C61.7812 10.0677 61.9453 9.88281 62.0703 9.64844C62.2005 9.41406 62.2917 9.14323 62.3438 8.83594C62.401 8.52865 62.4297 8.19792 62.4297 7.84375ZM69.9766 12.1562C69.3203 12.1562 68.7318 12.0521 68.2109 11.8438C67.6901 11.6302 67.2474 11.3359 66.8828 10.9609C66.5234 10.5859 66.2474 10.151 66.0547 9.65625C65.862 9.15625 65.7656 8.625 65.7656 8.0625V7.75C65.7656 7.10938 65.8568 6.52344 66.0391 5.99219C66.2214 5.46094 66.4818 5 66.8203 4.60938C67.1641 4.21875 67.5807 3.91927 68.0703 3.71094C68.5599 3.4974 69.112 3.39062 69.7266 3.39062C70.3255 3.39062 70.8568 3.48958 71.3203 3.6875C71.7839 3.88542 72.1719 4.16667 72.4844 4.53125C72.8021 4.89583 73.0417 5.33333 73.2031 5.84375C73.3646 6.34896 73.4453 6.91146 73.4453 7.53125V8.46875H66.7266V6.96875H71.2344V6.79688C71.2344 6.48438 71.1771 6.20573 71.0625 5.96094C70.9531 5.71094 70.7865 5.51302 70.5625 5.36719C70.3385 5.22135 70.0521 5.14844 69.7031 5.14844C69.4062 5.14844 69.151 5.21354 68.9375 5.34375C68.724 5.47396 68.5495 5.65625 68.4141 5.89062C68.2839 6.125 68.1849 6.40104 68.1172 6.71875C68.0547 7.03125 68.0234 7.375 68.0234 7.75V8.0625C68.0234 8.40104 68.0703 8.71354 68.1641 9C68.263 9.28646 68.401 9.53385 68.5781 9.74219C68.7604 9.95052 68.9792 10.112 69.2344 10.2266C69.4948 10.3411 69.7891 10.3984 70.1172 10.3984C70.5234 10.3984 70.901 10.3203 71.25 10.1641C71.6042 10.0026 71.9089 9.76042 72.1641 9.4375L73.2578 10.625C73.0807 10.8802 72.8385 11.125 72.5312 11.3594C72.2292 11.5938 71.8646 11.7865 71.4375 11.9375C71.0104 12.0833 70.5234 12.1562 69.9766 12.1562ZM79.0156 7.1875V8.53906H75.8828V7.1875H79.0156ZM78.2031 10.3984C78.4792 10.3984 78.724 10.3464 78.9375 10.2422C79.151 10.1328 79.3177 9.98177 79.4375 9.78906C79.5625 9.59115 79.6276 9.35938 79.6328 9.09375H81.75C81.7448 9.6875 81.5859 10.2161 81.2734 10.6797C80.9609 11.138 80.5417 11.5 80.0156 11.7656C79.4896 12.026 78.901 12.1562 78.25 12.1562C77.5938 12.1562 77.0208 12.0469 76.5312 11.8281C76.0469 11.6094 75.6406 11.3073 75.3125 10.9219C74.9896 10.5312 74.7474 10.0781 74.5859 9.5625C74.4297 9.04167 74.3516 8.48438 74.3516 7.89062V7.66406C74.3516 7.0651 74.4297 6.50781 74.5859 5.99219C74.7474 5.47135 74.9896 5.01823 75.3125 4.63281C75.6406 4.24219 76.0469 3.9375 76.5312 3.71875C77.0208 3.5 77.5885 3.39062 78.2344 3.39062C78.9219 3.39062 79.5286 3.52344 80.0547 3.78906C80.5807 4.05469 80.9922 4.4349 81.2891 4.92969C81.5911 5.41927 81.7448 6 81.75 6.67188H79.6328C79.6276 6.39062 79.5677 6.13542 79.4531 5.90625C79.3438 5.67708 79.1823 5.49479 78.9688 5.35938C78.7604 5.21875 78.5026 5.14844 78.1953 5.14844C77.8672 5.14844 77.5964 5.21875 77.3828 5.35938C77.1745 5.49479 77.013 5.68229 76.8984 5.92188C76.7839 6.15625 76.7057 6.42448 76.6641 6.72656C76.6224 7.02344 76.6016 7.33594 76.6016 7.66406V7.89062C76.6016 8.21875 76.6224 8.53385 76.6641 8.83594C76.7057 9.13802 76.7839 9.40625 76.8984 9.64062C77.0182 9.875 77.1823 10.0599 77.3906 10.1953C77.6042 10.3307 77.875 10.3984 78.2031 10.3984ZM86.5312 10.3984C86.8073 10.3984 87.0521 10.3464 87.2656 10.2422C87.4792 10.1328 87.6458 9.98177 87.7656 9.78906C87.8906 9.59115 87.9557 9.35938 87.9609 9.09375H90.0781C90.0729 9.6875 89.9141 10.2161 89.6016 10.6797C89.2891 11.138 88.8698 11.5 88.3438 11.7656C87.8177 12.026 87.2292 12.1562 86.5781 12.1562C85.9219 12.1562 85.349 12.0469 84.8594 11.8281C84.375 11.6094 83.9714 11.3073 83.6484 10.9219C83.3255 10.5312 83.0833 10.0781 82.9219 9.5625C82.7604 9.04167 82.6797 8.48438 82.6797 7.89062V7.66406C82.6797 7.0651 82.7604 6.50781 82.9219 5.99219C83.0833 5.47135 83.3255 5.01823 83.6484 4.63281C83.9714 4.24219 84.375 3.9375 84.8594 3.71875C85.3438 3.5 85.9115 3.39062 86.5625 3.39062C87.2552 3.39062 87.862 3.52344 88.3828 3.78906C88.9089 4.05469 89.3203 4.4349 89.6172 4.92969C89.9193 5.41927 90.0729 6 90.0781 6.67188H87.9609C87.9557 6.39062 87.8958 6.13542 87.7812 5.90625C87.6719 5.67708 87.5104 5.49479 87.2969 5.35938C87.0885 5.21875 86.8307 5.14844 86.5234 5.14844C86.1953 5.14844 85.9271 5.21875 85.7188 5.35938C85.5104 5.49479 85.349 5.68229 85.2344 5.92188C85.1198 6.15625 85.0391 6.42448 84.9922 6.72656C84.9505 7.02344 84.9297 7.33594 84.9297 7.66406V7.89062C84.9297 8.21875 84.9505 8.53385 84.9922 8.83594C85.0339 9.13802 85.112 9.40625 85.2266 9.64062C85.3464 9.875 85.5104 10.0599 85.7188 10.1953C85.9271 10.3307 86.1979 10.3984 86.5312 10.3984ZM95.6875 3.54688V12H93.4297V3.54688H95.6875ZM98.4062 3.54688V5.28906H90.75V3.54688H98.4062ZM101.805 5.17188V15.25H99.5547V3.54688H101.641L101.805 5.17188ZM107.156 7.67969V7.84375C107.156 8.45833 107.083 9.02865 106.938 9.55469C106.797 10.0807 106.589 10.5391 106.312 10.9297C106.036 11.3151 105.693 11.6172 105.281 11.8359C104.875 12.0495 104.406 12.1562 103.875 12.1562C103.359 12.1562 102.911 12.0521 102.531 11.8438C102.151 11.6354 101.831 11.3438 101.57 10.9688C101.315 10.5885 101.109 10.1484 100.953 9.64844C100.797 9.14844 100.677 8.61198 100.594 8.03906V7.60938C100.677 6.99479 100.797 6.43229 100.953 5.92188C101.109 5.40625 101.315 4.96094 101.57 4.58594C101.831 4.20573 102.148 3.91146 102.523 3.70312C102.904 3.49479 103.349 3.39062 103.859 3.39062C104.396 3.39062 104.867 3.49219 105.273 3.69531C105.685 3.89844 106.029 4.1901 106.305 4.57031C106.586 4.95052 106.797 5.40365 106.938 5.92969C107.083 6.45573 107.156 7.03906 107.156 7.67969ZM104.898 7.84375V7.67969C104.898 7.32031 104.867 6.98958 104.805 6.6875C104.747 6.38021 104.654 6.11198 104.523 5.88281C104.398 5.65365 104.232 5.47656 104.023 5.35156C103.82 5.22135 103.573 5.15625 103.281 5.15625C102.974 5.15625 102.711 5.20573 102.492 5.30469C102.279 5.40365 102.104 5.54688 101.969 5.73438C101.833 5.92188 101.732 6.14583 101.664 6.40625C101.596 6.66667 101.555 6.96094 101.539 7.28906V8.375C101.565 8.76042 101.638 9.10677 101.758 9.41406C101.878 9.71615 102.062 9.95573 102.312 10.1328C102.562 10.3099 102.891 10.3984 103.297 10.3984C103.594 10.3984 103.844 10.3333 104.047 10.2031C104.25 10.0677 104.414 9.88281 104.539 9.64844C104.669 9.41406 104.76 9.14323 104.812 8.83594C104.87 8.52865 104.898 8.19792 104.898 7.84375ZM113.117 10.0938V6.32812C113.117 6.05729 113.073 5.82552 112.984 5.63281C112.896 5.4349 112.758 5.28125 112.57 5.17188C112.388 5.0625 112.151 5.00781 111.859 5.00781C111.609 5.00781 111.393 5.05208 111.211 5.14062C111.029 5.22396 110.888 5.34635 110.789 5.50781C110.69 5.66406 110.641 5.84896 110.641 6.0625H108.391C108.391 5.70312 108.474 5.36198 108.641 5.03906C108.807 4.71615 109.049 4.43229 109.367 4.1875C109.685 3.9375 110.062 3.74219 110.5 3.60156C110.943 3.46094 111.438 3.39062 111.984 3.39062C112.641 3.39062 113.224 3.5 113.734 3.71875C114.245 3.9375 114.646 4.26562 114.938 4.70312C115.234 5.14062 115.383 5.6875 115.383 6.34375V9.96094C115.383 10.4245 115.411 10.8047 115.469 11.1016C115.526 11.3932 115.609 11.6484 115.719 11.8672V12H113.445C113.336 11.7708 113.253 11.4844 113.195 11.1406C113.143 10.7917 113.117 10.4427 113.117 10.0938ZM113.414 6.85156L113.43 8.125H112.172C111.875 8.125 111.617 8.15885 111.398 8.22656C111.18 8.29427 111 8.39062 110.859 8.51562C110.719 8.63542 110.615 8.77604 110.547 8.9375C110.484 9.09896 110.453 9.27604 110.453 9.46875C110.453 9.66146 110.497 9.83594 110.586 9.99219C110.674 10.1432 110.802 10.263 110.969 10.3516C111.135 10.4349 111.331 10.4766 111.555 10.4766C111.893 10.4766 112.188 10.4089 112.438 10.2734C112.688 10.138 112.88 9.97135 113.016 9.77344C113.156 9.57552 113.229 9.38802 113.234 9.21094L113.828 10.1641C113.745 10.3776 113.63 10.599 113.484 10.8281C113.344 11.0573 113.164 11.2734 112.945 11.4766C112.727 11.6745 112.464 11.8385 112.156 11.9688C111.849 12.0938 111.484 12.1562 111.062 12.1562C110.526 12.1562 110.039 12.0495 109.602 11.8359C109.169 11.6172 108.826 11.3177 108.57 10.9375C108.32 10.5521 108.195 10.1146 108.195 9.625C108.195 9.18229 108.279 8.78906 108.445 8.44531C108.612 8.10156 108.857 7.8125 109.18 7.57812C109.508 7.33854 109.917 7.15885 110.406 7.03906C110.896 6.91406 111.464 6.85156 112.109 6.85156H113.414ZM117.109 12V3.54688H119.359V10.2422H122.188V3.54688H124.445V12H117.109ZM125.711 10.25L125.562 14.5078H123.469V12H122.523V10.25H125.711ZM129.227 3.54688V12H126.969V3.54688H129.227ZM126.828 1.34375C126.828 1.01562 126.943 0.744792 127.172 0.53125C127.401 0.317708 127.708 0.210938 128.094 0.210938C128.474 0.210938 128.779 0.317708 129.008 0.53125C129.242 0.744792 129.359 1.01562 129.359 1.34375C129.359 1.67188 129.242 1.94271 129.008 2.15625C128.779 2.36979 128.474 2.47656 128.094 2.47656C127.708 2.47656 127.401 2.36979 127.172 2.15625C126.943 1.94271 126.828 1.67188 126.828 1.34375ZM133.516 3.54688V12H131.258V3.54688H133.516ZM129.398 1.4375C129.398 1.16667 129.503 0.9375 129.711 0.75C129.914 0.557292 130.167 0.460938 130.469 0.460938C130.781 0.460938 131.039 0.557292 131.242 0.75C131.445 0.9375 131.547 1.16667 131.547 1.4375C131.547 1.70833 131.445 1.9375 131.242 2.125C131.039 2.3125 130.781 2.40625 130.469 2.40625C130.167 2.40625 129.914 2.3125 129.711 2.125C129.503 1.9375 129.398 1.70833 129.398 1.4375ZM133.234 1.44531C133.234 1.16927 133.336 0.9375 133.539 0.75C133.742 0.5625 133.997 0.46875 134.305 0.46875C134.612 0.46875 134.867 0.5625 135.07 0.75C135.279 0.9375 135.383 1.16927 135.383 1.44531C135.383 1.71615 135.279 1.94531 135.07 2.13281C134.867 2.3151 134.612 2.40625 134.305 2.40625C133.997 2.40625 133.742 2.3151 133.539 2.13281C133.336 1.94531 133.234 1.71615 133.234 1.44531Z"
                                    fill="#2D7581"/>
                            </svg>
                        </div>
                        <div className="data">
                            <input className="h-i w-i m-all di" type="text" placeholder="ПІБ" onChange={e=>{
                                this.setState({fullName:e.target.value})
                            }}/>
                            <input className="h-i w-i m-all di" type="text" placeholder="Логін" onChange={(e)=>{
                                this.setState({login:e.target.value})
                            }}/>
                            <input className="h-i w-i m-all di" type="text" placeholder="Пошта" onChange={(e)=>{
                                this.setState({email:e.target.value})
                            }}/>
                            <div className="pass-l">
                                <input className="h-i w-i m-all di passIn" type="password" placeholder="Пароль" onChange={(e)=>{
                                    this.setState({password:e.target.value})
                                }}/>
                                <div className="pass-btn2 cr-p">
                                    <img src={img} className="i-eye" alt=""/>
                                </div>
                            </div>
                            <div className="pass-l">
                                <input className="h-i w-i m-all di passIn" type="password" placeholder="Повторіть пароль"/>
                                <div className="pass-btn2 cr-p">
                                    <img src={img} className="i-eye" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <button className="btn-singup m-all" >
                                Зареєструватися
                            </button>
                        </div>
                        <Link className="btn btn-login m-all" to="/login">
                            Ви зареєстровані?
                        </Link>
                        <div className="m-all t-nor">
                            або через
                        </div>
                        <div className="m-all">
                            <Link to="/">
                                <img className="img-login" src={google} alt=""/>
                            </Link>
                            <Link className="m-l-10" to="/facebook">
                                <img className="img-login" src={facebook} alt=""/>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
