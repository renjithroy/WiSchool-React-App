import React from 'react';
import './Category.css';
import Container from 'react-bootstrap/Container';
import professionalMen from '../../assets/professional-men.png';

function Category() {
    return (
        <Container>
            <div className="category-heading">
                <p className='category-main-text'>Choose favourite course from top categories</p>
                <p className='category-mini-text'>See all</p>
            </div>
            <div className="category-content">
                <div className="item">
                    <img src={professionalMen} />
                    <p className="item-title">Marketing</p>
                    <span className='hover-one'>{"<"}</span>
                </div>
                <div className="item">
                    <img src={professionalMen} />
                    <p className="item-title">Design</p>
                </div>
                <div className="item">
                    <img src={professionalMen} />
                    <p className="item-title">Programming</p>
                </div>
                <div className="item">
                    <img src={professionalMen} />
                    <p className="item-title">Technology</p>
                    <span className='hover-two'>{">"}</span>
                </div>
            </div>
        </Container>
    )
}


export default Category