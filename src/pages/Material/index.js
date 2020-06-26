import React from 'react';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
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
    <ActivityHistory>
      <h1>Registro de Atividades</h1>
      {/* Histórico dos Materiais */}
      <div>
        {/* Material */}
        <div>
          {/* Material Info */}
          <div>
            <div>
              <h2>Nome Material</h2>
              <span>DEVOLVIDO há 2 minutos</span>
            </div>
            <MdKeyboardArrowDown size={30} />
          </div>
          {/* Loan Info */}
          <div>
            <div>
              <h3>Emp. para:</h3>
              <span>20161038060002</span>
            </div>
            <h3>Não devolvido</h3>
          </div>
        </div>
        <div>
          <MdKeyboardArrowLeft size={30} />
          <MdKeyboardArrowRight size={30} />
        </div>
      </div>
    </ActivityHistory>
  </Main>
);

export default Material;
