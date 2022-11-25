import React, {useState} from 'react';
import img from './svg/img.svg'
import text1 from './svg/text.svg'
import './index.css'
import SingUp from '../modal/singup.js'

export const MainPage = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <main className="">
            <SingUp active={modalActive} setActive={setModalActive}/>
            <div className="modal2">
                <div className="m-content2 center">
                    <img src={text1} className="center img"/>
                </div>
                <button className="btn-join m-all" onClick={()=> setModalActive(true)}>Приєднатися</button>
            </div>
        </main>
    );
};

export default MainPage;