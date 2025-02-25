import React from 'react';
import { ExpertiseCard } from './ExpertiseCard';
import { Image } from '../assets/images/image';

const Expertise = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-8">
        <ExpertiseCard
          title="HTML, CSS, JavaScript"
          description="Frontend Development"
          image={Image.WebDevFund}
        />
        <ExpertiseCard
          title="PHP"
          description="Backend Development"
          image={Image.PHP}
        />
        <ExpertiseCard
          title="Tailwind CSS"
          description="Frontend Development"
          image={Image.Tailwind}
        />
        <ExpertiseCard
          title="Bootstrap"
          description="Frontend Development"
          image={Image.Bootstrap}
        />
        <ExpertiseCard
          title="React JS"
          description="Frontend Development"
          image={Image.React}
        />
        <ExpertiseCard
          title="MySQL"
          description="Backend Development"
          image={Image.MySQL}
        />
        <ExpertiseCard
          title="MongoDB"
          description="Backend Development"
          image={Image.MongoDB}
        />
      </div>
    </>
  );
};

export default Expertise;
