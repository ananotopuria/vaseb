import React from 'react';
import Title from '../../common/Title';

const teamMembers = [
  {
    name: 'Esther Howards',
    role: 'Founder & CEO',
    imgSrc:
      'https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c10a86494690c3ea3eb9b_team-thumb-03.jpg',
  },
  {
    name: 'Ronald Richard',
    role: 'Team Leader',
    imgSrc:
      'https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c10a87f06a9b36e6c1f74_team-thumb-02.jpg',
  },
  {
    name: 'Bessie Cooper',
    role: 'Sales Executive',
    imgSrc:
      'https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c10a870133576d7ba940b_team-thumb-01.jpg',
  },
  {
    name: 'Cameron Williamson',
    role: 'Marketing Manager',
    imgSrc:
      'https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c10a751d8f5bc36735a61_team-thumb-04.jpg',
  },
];

const Team: React.FC = () => {
  return (
    <section className="team py-8">
      <Title mainTitle="Meet Our Team" subTitle="Members" />
      <div className="container mx-auto ">
        <div className="team-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-block text-center">
              <div className="team-img mb-4">
                <img
                  src={member.imgSrc}
                  loading="lazy"
                  sizes="(max-width: 479px) 44vw, (max-width: 767px) 30vw, 23vw"
                  srcSet={`${member.imgSrc}-p-500.jpg 500w, ${member.imgSrc} 612w`}
                  alt={`Image of ${member.name}`}
                  className="team-image mx-auto"
                />
              </div>
              <div className="team-info">
                <div className="team-name text-xl">{member.name}</div>
                <div className="text-gray-500">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
