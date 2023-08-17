import './Skills.css'
import Container from 'react-bootstrap/Container';
import imgOne from '../../assets/img-one.png';
import imgTwo from '../../assets/img-two.png';
import imgThree from '../../assets/img-three.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Skills() {
    return (
        <Container>
            <div className="skill-heading">
                <p className='skill-main-text'>Learn A New Skill In Two Hours</p>
                <p className='skill-sort d-xs-block d-md-none'>Sort by</p>
            </div>
            <CardGroup className='mb-5 skill-card-group'>
                <Card className='mx-3 box-shadow-item card-item'>
                    <Card.Img variant="top" src={imgOne} className='skill-img'/>
                    <Card.Body>
                        <p className="skill-title">All you need in Business Strategy</p>
                        <div className="flex-groups">
                            <span className='skill-duration'>6 weeks</span>
                            <span className='skill-enrolled'>1.5k Students</span>
                            <span className='skill-price'>30.5$</span>
                        </div>
                    </Card.Body>
                    <span className='skill-hover-one'>{"<"}</span>
                </Card>
                <Card className='mx-3 box-shadow-item card-item'>
                    <Card.Img variant="top" src={imgTwo} />
                    <Card.Body>
                        <p className="skill-title">The amazing hack in Figma prototyping</p>
                        <div className="flex-groups">
                            <span className='skill-duration'>4 weeks</span>
                            <span className='skill-enrolled'>1.8k Students</span>
                            <span className='skill-price'>20.5$</span>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='mx-3 box-shadow-item card-item'>
                    <Card.Img variant="top" src={imgThree} />
                    <Card.Body>
                        <p className="skill-title">Introduction to basic game developement</p>
                        <div className="flex-groups">
                            <span className='skill-duration'>5 weeks</span>
                            <span className='skill-enrolled'>2.2k Students</span>
                            <span className='skill-price'>25.5$</span>
                        </div>
                    </Card.Body>
                    <span className='skill-hover-two'>{">"}</span>
                </Card>
            </CardGroup>
        </Container>
    );
}

export default Skills;