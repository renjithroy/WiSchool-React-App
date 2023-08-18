import React from 'react';
import './Form.css';
import CompetitionImg from '../../assets/Competition.png';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterForm() {
    // const isSmallScreen = window.innerWidth <= 768;

    // const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth);

    const [formText, setFormText] = React.useState('');

    React.useEffect(() => {
        const updateFormText = () => {
            if (window.innerWidth <= 768) {
                setFormText("Enroll For A Course Now");
            } else {
                setFormText("Registration to get notified about new competitions and articles we publish.");
            }
        };

        updateFormText();

        window.addEventListener('resize', updateFormText);

        return () => {
            window.removeEventListener('resize', updateFormText);
        };
    }, []);

    return (
        <div>
            <div className="form-title">
                Compete with various scholars<br />around the globe
            </div>
            <div className='outer'>
                <Container>
                    <Row className='inner'>
                        <Col xs={12} lg={6} className="form-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="73" viewBox="0 0 73 73" fill="none">
                                <g filter="url(#filter0_b_1_649)">
                                    <circle cx="36.5" cy="36.5" r="36.5" fill="#FFEEE1" fill-opacity="0.8" />
                                </g>
                                <defs>
                                    <filter id="filter0_b_1_649" x="-10" y="-10" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_649" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_649" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <img src={CompetitionImg} alt="CompetitionImg" className='form-img-element' />
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="73" viewBox="0 0 73 73" fill="none">
                                <g filter="url(#filter0_b_1_649)">
                                    <circle cx="36.5" cy="36.5" r="36.5" fill="#FFEEE1" fill-opacity="0.8" />
                                </g>
                                <defs>
                                    <filter id="filter0_b_1_649" x="-10" y="-10" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_649" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_649" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </Col>
                        <Col xs={12} lg={6} className="form">
                            <Form className='form-element'>
                                <Form.Group className="mb-3 pb-3" controlId="formBasicText">
                                    <Form.Text className='in-form-title'>
                                       {formText}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3 pb-3" controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Full name" className='p-2 placeholder-text' />
                                </Form.Group>

                                <Form.Group className="mb-3 pb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" className='p-2 placeholder-text' />
                                </Form.Group>

                                <Form.Group className="mb-3 pb-3" controlId="formBasicPhone">
                                    <Form.Control type="tel" placeholder="Phone number" className='p-2 placeholder-text' />
                                </Form.Group>

                                <Form.Group className="mb-3 pb-5" controlId="formBasicDropdown">
                                    <Form.Select className='p-2 rounded form-dropdown placeholder-text text-muted'>
                                        <option value="course-list">List of courses goes here</option>
                                        <option value="course-1">Course 1</option>
                                        <option value="course-2">Course 2</option>
                                        <option value="course-3">Course 3</option>
                                    </Form.Select>
                                </Form.Group>

                                <div className="form-btn-div">
                                    <Button variant="primary" type="submit" className='form-btn'>
                                        Register
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default RegisterForm;
