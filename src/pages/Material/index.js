import React from 'react';
import { Main, Materials, ActivityHistory } from './style';
import Card from '../../components/Card';

const materiais = [
  {
    id: 1,
    name: 'Nome Material',
    description:
      'Mussum Ipsum, cacilds vidis lito abertis. Quem num gosta di mim....',
    amount: 3,
  },
  {
    id: 2,
    name: 'Nome Material',
    description:
      'Mussum Ipsum, cacilds vidis lito abertis. Quem num gosta di mim....',
    amount: 2,
  },
  {
    id: 3,
    name: 'Nome Material',
    description:
      'Mussum Ipsum, cacilds vidis lito abertis. Quem num gosta di mim....',
    amount: 1,
  },
  {
    id: 4,
    name: 'Nome Material',
    description:
      'Mussum Ipsum, cacilds vidis lito abertis. Quem num gosta di mim....',
    amount: 0,
  },
];

const Material = () => (
  <Main>
    <Materials>
      {materiais.map((e) => (
        <Card
          key={e.id}
          name={e.name}
          description={e.description}
          hasMaterials={e.amount !== 0}
        />
      ))}
    </Materials>
    <ActivityHistory>Activity</ActivityHistory>
  </Main>
);

export default Material;
