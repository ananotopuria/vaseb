
import React from 'react';
import Title from '../components/common/Title';


const reviews = [
  {
    stars: '★★★★☆',
    text: 'Brighton Décor is an excellent choice for anyone who wants to transform their living space into a comfortable home.',
    imgSrc: 'images/albert.jpg',
    name: 'Albert Flores',
    location: 'New Jersey, USA'
  },
  {
    stars: '★★★★☆',
    text: 'I recently purchased the Modern Luxe Sofa from Modern Living, and it has completely transformed my living room.',
    imgSrc: 'images/devon.jpg',
    name: 'Devon Lane',
    location: 'Florida, US'
  },
  {
    stars: '★★★★☆',
    text: 'If you\'re looking for a company that can help you turn your house into a home, look no further than this company.',
    imgSrc: 'images/bessie.jpg',
    name: 'Bessie Cooper',
    location: 'Texas, US'
  },
  {
    stars: '★★★★★',
    text: 'I purchased the Eco-Friendly Bamboo Dining Table, and I\'m very happy with it. It\'s a great addition to my dining room.',
    imgSrc: 'images/courtney.jpg',
    name: 'Courtney Henry',
    location: 'California, USA'
  },
  {
    stars: '★★★☆☆',
    text: 'I bought the Smart Coffee Table with wireless charging, and it has been a fantastic addition to my home office.',
    imgSrc: 'images/jenny.jpg',
    name: 'Jenny Wilson',
    location: 'Toronto, US'
  },
  {
    stars: '★★★★☆',
    text: 'I recently bought the Ergonomic Office Chair from Vaseb, and it\'s been a game-changer for my home office.',
    imgSrc: 'images/ralph.webp',
    name: 'Ralph Edwards',
    location: 'Georgia, US'
  }
];

type ReviewCardProps = {
  stars: string;
  text: string;
  imgSrc: string;
  name: string;
  location: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ stars, text, imgSrc, name, location }) => (
  <div className="review-card">
    <div className="stars">{stars}</div>
    <p>{text}</p>
    <div className="reviewer-info">
      <img src={imgSrc} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
    </div>
  </div>
);

const ReviewsPage: React.FC = () => (
  <div>
    <div className="header-container">
    <Title
        mainTitle="Customer Reviews"
        subTitle="Testimonial"
      />
    </div>
    <section className="testimonials">
      <div className="review-grid">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  </div>
);

export default ReviewsPage;
