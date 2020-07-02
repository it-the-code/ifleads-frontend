import React from 'react';
import { useSelector } from 'react-redux';
import { compareDesc } from 'date-fns';
import { Main, Materials } from './style';
import Card from '../../components/Card';
import ActivityHistory from '../../components/ActivityHistory';

const Material = () => {
  const materials = useSelector((state) => state.materials);
  const loans = useSelector((state) =>
    state.loans.slice().sort((a, b) => compareDesc(a.updated_at, b.updated_at))
  );

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
