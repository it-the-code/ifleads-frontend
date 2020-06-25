import React from 'react';
import { Main, Materials, ActivityHistory } from './style';
import Card from '../../components/Card';

const materiais = [
  {
    id: 1,
    name: 'Nome Material',
    description:
      'Mussum Ipsum, cacilds vidis lito abertis. Quem num gosta di mim....',
  },
  {
    id: 2,
    name: 'Nome Material',
    description:
      'Mussum Ipsum, cacilds vidis lito abertis. Quem num gosta di mim....',
  },
  {
    id: 3,
    name: 'Nome Material',
    description:
      'Mussum Ipsum, cacilds vidis lito abertis. Quem num gosta di mim....',
  },
  {
    id: 4,
    name: 'Nome Material',
    description:
      'Mussum Ipsum, cacilds vidis lito abertis. Quem num gosta di mim....',
  },
];

const Material = () => (
  <Main>
    <Materials>
      {materiais.map((e) => (
        <Card key={e.id} name={e.name} description={e.description} />
      ))}
    </Materials>
    <ActivityHistory>Activity</ActivityHistory>
  </Main>
);

export default Material;
