import './Review.css'
import { Container} from 'react-bootstrap';
import line from '../../assets/line.png';
import menOne from '../../assets/men-one.png';
import menTwo from '../../assets/men-two.png';

const Review = () => {
    return (
            <Container fluid className='mb-5 pb-5'>
                <div className="review-title">
                    Reviews
                </div>

                <div className='review-container'>

                    <div className="review-section-one">
                        <p className='review-intro'>What Our<br /><span className='students-wording'>Students</span> Say<br />About Us <img src={line} alt="line" className='line' /> </p>
                        <div className='d-flex hover-group'>
                            <span className='review-hover-one'>{"<"}</span>
                            <span className='review-hover-two'>{">"}</span>
                        </div>
                    </div>

                <div className="review-section-two">

                        <div className="review-one">
                            <div className="profile">
                                <div className="inner-profile">
                                    <img src={menOne} alt="men one" />
                                    <div>
                                        <span className="profile-name">
                                            Mohh Jumah
                                        </span> <br />
                                        <span className="profile-role">
                                            Senior Developer
                                        </span>
                                    </div>
                                </div>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus.
                                    Sit ultricies nisl amet non, quis enim velit tempus. </p>
                            </div>
                        </div>

                        <div className="review-two">
                            <div className="profile">
                                <div className="inner-profile">
                                    <img src={menTwo} alt="men two" />
                                    <div>
                                        <span className="profile-name">John Mark</span><br />
                                        <span className="profile-role">Data Analyst</span>
                                    </div>
                                </div>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus.
                                    Sit ultricies nisl amet non, quis enim velit tempus. </p>
                            </div>
                        </div>

                    </div>

                </div>

            </Container>
    )
}

export default Review;