
import SectionHeader  from '../components/SectionHeader';
import { TestimonialProps } from '../components/Testimonal';
import '../pagesStyles/TestimonalsStyles.css'
import Testimonial from '../components/Testimonal';

const testimonials: TestimonialProps[] = [
    {
        personName: "John Doe",
        personDesignation: "CEO, Company A",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nisi, id aliquam nunc. Nulla facilisi. Sed id nunc nec nisl aliquet tincidunt.",
    },
    {
        personName: "Jane Smith",
        personDesignation: "CTO, Company B",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nisi, id aliquam nunc. Nulla facilisi. Sed id nunc nec nisl aliquet tincidunt.",
    },
    {
        personName: "David Johnson",
        personDesignation: "COO, Company C",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nisi, id aliquam nunc. Nulla facilisi. Sed id nunc nec nisl aliquet tincidunt.",
    },
       {
        personName: "John Doe",
        personDesignation: "CEO, Company A",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nisi, id aliquam nunc. Nulla facilisi. Sed id nunc nec nisl aliquet tincidunt.",
    },
    {
        personName: "Jane Smith",
        personDesignation: "CTO, Company B",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nisi, id aliquam nunc. Nulla facilisi. Sed id nunc nec nisl aliquet tincidunt.",
    },
    {
        personName: "David Johnson",
        personDesignation: "COO, Company C",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nisi, id aliquam nunc. Nulla facilisi. Sed id nunc nec nisl aliquet tincidunt.",
    },
];

const TestimonalPage: React.FC = () => {
    return (
        <div className="testimonalPageContainer">
            <SectionHeader heading={"Testimonials"} intro={""} />
            <div className='testimonial_container'>
<div className="testimonials_wrapper">
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                ))}
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                ))}
            </div>
            </div>
            
        </div>
    );
}


export default TestimonalPage;