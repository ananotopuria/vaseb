import Textra from 'react-textra';

export default function Testimonials() {
   return (
      <section className="testimonials ">
         <div className="container p-relative">
            <div className="row text-center">
               <Textra
                  effect="rightLeft"
                  duration={1000}
                  data={[
                     "I recently bought the Ergonomic Office Chair from Vaseb, and it's been a game-changer for my home office.",
                     'I can rearrange the shelves and compartments to fit all my books and decorative items. It’s sturdy and stylish.',
                     "I purchased the Eco-Friendly Bamboo Dining Table, and I'm very happy with it. it's a great addition to my dining room.",
                     "If you're looking for a company that can help you turn your house into a home, look no further than this company.",
                  ]}
               />
            </div>
         </div>
      </section>
   );
}