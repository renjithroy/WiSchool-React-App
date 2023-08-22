import React from 'react';
import './Main.css'
import Container from 'react-bootstrap/Container';
import girlWithBooks from '../../assets/girl-with-books.png';
import face from '../../assets/face.png';
import personIcon from '../../assets/bi_person.svg';
import iconOne from '../../assets/icon-1.png';
import iconTwo from '../../assets/icon-2.png';
import iconThree from '../../assets/icon-3.png';
import iconFour from '../../assets/icon-4.png';
import iconFive from '../../assets/icon-5.png';



function Main() {
    return (
        <Container>
            <div className="child-container">
                <div className='section-one'>
                    <h1 className='title'>Quality <span className='education-wording'>Education</span><br />By Any Means<br />Necessary.</h1>
                    <button className='get-started-btn'>Get Started</button>
                </div>
                <div className='section-two'>
                    <div className="msg-two">
                        <p>Learn from best <br /><span className='instructors-wording'>instructors</span> around <br />the globe</p>
                        <img src={face} className='face' />
                        <img src={face} className='face' />
                        <img src={face} className='face' />
                        <img src={face} className='face' />
                        <img src={face} className='face' />
                    </div>
                    <div className="msg-three">
                        <img src={personIcon} className='personIcon' />
                        <p className='k-wording'>15k</p>
                        <p className='msg-three-text'>Amazing<br />students around<br />the globe</p>
                    </div>
                    <img src={girlWithBooks} className='girl-img' />
                    {/* <div className='design-end'></div> */}
                </div>
            </div>

            <div className="activities">
                <div className="activity">
                    <img src={iconOne} alt="" className='icon'/>
                    <p className='activity-text'>Problem Solving</p>
                </div>
                <div className="activity">
                    <img src={iconTwo} alt="" className='icon' />
                    <p className='activity-text'>Live chat</p>
                </div>
                <div className="activity">
                    <img src={iconThree} alt="" className='icon' />
                    <p className='activity-text'>Group Reading</p>
                </div>
                <div className="activity">
                    <img src={iconFour} alt="" className='icon' />
                    <p className='activity-text'>10k Courses</p>
                </div>
                <div className="activity">
                    <img src={iconFive} alt="" className='icon' />
                    <p className='activity-text'>Hand-on activities</p>
                </div>
            </div>

        </Container>
    )
}

export default Main