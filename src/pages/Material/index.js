import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Main, Materials, ActivityHistory, Pagination } from './style';
import Card from '../../components/Card';
import Track from '../../components/Track';

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
    <ActivityHistory>
      <div>
        <h1>Registro de Atividades</h1>
        <Track />
        <Track />
        <Track />
      </div>
      <Pagination>
        <MdKeyboardArrowLeft size={40} />
        <MdKeyboardArrowRight size={40} />
      </Pagination>
    </ActivityHistory>
  </Main>
);

export default Material;
