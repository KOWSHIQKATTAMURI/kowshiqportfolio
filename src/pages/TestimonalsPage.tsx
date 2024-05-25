import SectionHeader from "../components/SectionHeader";
import { TestimonialProps } from "../components/Testimonal";
import "../pagesStyles/TestimonalsStyles.css";
import Testimonial from "../components/Testimonal";

const testimonials: TestimonialProps[] = [
  {
    personName: "Neha Kumari",
    personDesignation: "Student",
    review:
      "I highly recommend him for his excellent teaching skills. He simplifies problems and provides clear understanding of topics, making even challenging subjects accessible. His engaging style includes insightful explanations, practical examples, and interactive lessons, ensuring thorough comprehension. His passion for mathematics and strong communication skills make it easy for anyone to understand his teachings.",
  },
  {
    personName: "Madhur Gupta's",
    personDesignation: "IIIT Delhi undergrad",
    review:
      "I wholeheartedly recommend him as a maths teacher. His ability to simplify complex concepts and make maths enjoyable for students is truly remarkable. He is not only knowledgeable but also patient and dedicated to the success of their students. His original problems and his book serve as the best resources for revision and success in any maths-related Olympiad.",
  },
  {
    personName: "Kurella's ",
    personDesignation: "Osmania University Undergrad",
    review:
      "I am Mr. Kattamuri Kowshiq's junior. He has very good teaching skills, and he is highly passionate about teaching. He provided invaluable assistance during my preparation days. I guarantee that anyone will fall in love with his teaching.",
  },
  {
    personName: "Ankita Mandal",
    personDesignation: "Student",
    review:
      "This book has truly mind-blowing questions that broaden my horizons! It was beneficial for my JEE Advanced preparation!",
  },
  {
    personName: "Kedar",
    personDesignation: "IIT KGP undergrad",
    review:
      "This is a very good book—in fact, an excellent book. Solving this requires deep conceptual clarity, so beginners should be cautious and focus on mastering the fundamentals first. If you are preparing for the JEE Advanced, consider using this book in the final stages, 45 days before the advanced level, to improve your preparation.",
  },
  {
    personName: "Ritik Sahu",
    personDesignation: "Student",
    review:
      "We need to admire the thought process behind each solution. Every question has received exceptionally good solutions. I initially thought 349/- would be too much for this book, but now I realise it's worth it. A superb book for problems. He demonstrated new theorems, such as Shoelace and Vivian, in a comprehensible manner. New concepts like the mirror concept and the reduction concept in probability are just mind-blowing. Kudoz!",
  },
  {
    personName: "Koushik Gupta",
    personDesignation: "VNIT Nagpur alumni",
    review:
      "The book contains excellent summation problems that follow a logical approach. You can use these to solve other maths problems with ease. Throughout the book, it is very informative and helpful for JEE preparation.",
  },
  {
    personName: "Bibin",
    personDesignation: "NIT Calicut undergrad",
    review:
      "This is a great help to all aspirants. Each and every question is relevant and up-to-date. Hats off to the efforts made by an undergrad student to initiate this. I'm expecting more books from you.",
  },
  {
    personName: "Prashant Nayak",
    personDesignation: "IIT Bombay undergrad",
    review:
      "As the title suggests, the book and the problems within were also authored by the Wizard (the author himself, XD). It will be quite helpful to those who want to solve brainstorming mathematics problems.",
  },
];

const TestimonalPage: React.FC = () => {
  return (
    <div className="testimonalPageContainer" id="testimonals">
      <SectionHeader heading={"Testimonials"} intro={""} />
      <div className="testimonial_container">
        <div className="testimonials_wrapper">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonalPage;
