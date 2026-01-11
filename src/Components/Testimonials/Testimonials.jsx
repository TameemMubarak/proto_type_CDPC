import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from'../../assets/user-1.png'
import user_2 from'../../assets/user-2.png'
import user_3 from'../../assets/user-3.png'
import user_4 from'../../assets/user-4.png'


const Testimonials = () => {
     const slider=useRef();
        let tx=0;
    const slideForward=()=>{
         if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translate(${tx}%)`
    }

    const slideBackward=()=>{
         if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translate(${tx}%)`
    }


  return (
    <div className='testimonials'>
      <img src={next_icon} onClick={slideForward} alt="" className='next-btn'/>
      <img src={back_icon} onClick={slideBackward} alt="" className='back-btn'/>
      <div className="slider">
        <ul ref={slider}>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William JackSon</h3>
                            <span>Edusity, USA</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae. A, labore expedita. Officiis, deserunt rem itaque at illo error fuga voluptatibus eveniet minima praesentium quia quaerat quam odio blanditiis?</p>
                    </div>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William JackSon</h3>
                            <span>Edusity, USA</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae. A, labore expedita. Officiis, deserunt rem itaque at illo error fuga voluptatibus eveniet minima praesentium quia quaerat quam odio blanditiis?</p>
                    </div>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>William JackSon</h3>
                            <span>Edusity, USA</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae. A, labore expedita. Officiis, deserunt rem itaque at illo error fuga voluptatibus eveniet minima praesentium quia quaerat quam odio blanditiis?</p>
                    </div>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William JackSon</h3>
                            <span>Edusity, USA</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae. A, labore expedita. Officiis, deserunt rem itaque at illo error fuga voluptatibus eveniet minima praesentium quia quaerat quam odio blanditiis?</p>
                    </div>
                </div>
            </li>

        </ul>
      </div>
    </div>
  )
}

export default Testimonials
