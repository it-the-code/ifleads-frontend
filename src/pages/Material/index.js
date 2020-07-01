import React from 'react';
import { useSelector } from 'react-redux';
import { Main, Materials } from './style';
import Card from '../../components/Card';
import ActivityHistory from '../../components/ActivityHistory';

const Material = () => {
  const materials = useSelector((state) => state.materials);
  const loans = useSelector((state) => state.loans);

  return (
    <Main>
      <Materials>
        {materials
          .slice()
          .sort((a, b) => b.amount - a.amount)
          .map((e) => (
            <Card
              key={e.id}
              name={e.name}
              description={e.description}
              hasMaterials={e.amount !== 0}
            />
          ))}
      </Materials>
      <ActivityHistory loans={loans} />
    </Main>
  );
};

export default Material;
