import React from 'react';

interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

const Title: React.FC<TitleProps> = ({ mainTitle, subTitle }) => {
  return (
    <div className="flex flex-col container ">
      <div className="flex mt-10 gap-2 text-base">
        <img
          src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666a81442e040719153851c2_ic-subtitle.svg"
          alt="Subtitle Icon"
        />
        {subTitle && (
          <h3 className="text-lg text-gray-500 sub-title">{subTitle}</h3>
        )}
      </div>
      <div>
        <h2 className="main-title">{mainTitle}</h2>
      </div>
    </div>
  );
};

export default Title;
