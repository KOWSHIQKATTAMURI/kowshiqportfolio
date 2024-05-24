import React from 'react';
import '../componentsStyles/TestimonalItem.css'

export interface TestimonialProps {
    review: string;
    personName: string;
    personDesignation: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
    review,
    personName,
    personDesignation,
}) => {
    return (
        <div className='testimonalComponent'>
            <p className='para review'>{review}</p>
            <div className='reviewPerson '>
                <p className='tinyText'>{personDesignation}</p>
            <p className='para'>{personName}, </p>
            </div>
        </div>
    );
};

export default Testimonial;