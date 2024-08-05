import React from 'react';

interface JourneyBlockProps {
  year: string;
  description: string;
}

const JourneyBlock: React.FC<JourneyBlockProps> = ({ year, description }) => {
  return (
    <div className="journey-block border border-gray-300 flex gap-4 p-4 ">
      <div className="journey-tag">{year}</div>
      <p className="journey-text">{description}</p>
    </div>
  );
};

const Journey: React.FC = () => {
  return (
    <section className="journey mb-20">
      <div className="container w-container mx-auto">
        <div className="journey-wrap flex flex-col md:flex-row border border-gray-300 mb-4">
          <div className="journey-left md:w-1/2 p-4">
            <div className="journey-tag text-gray-500">Milestones</div>
            <div>
              <h3 className="text-2xl font-bold">Our journey to vaseb</h3>
              <p className="single-text text-gray-700">
                Vaseb started with a simple yet profound vision: to revolutionize home decor by integrating modern design with smart technology. Our founders, passionate about design and innovation.
              </p>
            </div>
          </div>
          <div className="journey-right md:w-1/2">
            <JourneyBlock year="2023" description="Launch of our eco-friendly product line, emphasizing sustainability." />
            <JourneyBlock year="2022" description="Introduction of smart home products, integrating technology with design." />
            <JourneyBlock year="2021" description="Vaseb set out to curate a collection of furniture and decor that resonates with the ethos of modernity." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
