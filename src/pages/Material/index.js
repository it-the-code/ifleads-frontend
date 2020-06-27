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

const history = [
  {
    id: 1,
    tooker_id: '20161038060002',
    loan_time: '2020-06-26 17:22:55',
    return_time: null,
    deleted_at: null,
    material: {
      name: 'Caixa de Som',
    },
  },
  {
    id: 2,
    tooker_id: '1234567890',
    loan_time: '2020-06-09 17:22:55',
    return_time: '2020-06-10 17:22:55',
    deleted_at: null,
    material: {
      name: 'Caixa de Som',
    },
  },
  {
    id: 3,
    tooker_id: '1234567890',
    loan_time: '2020-06-09 17:22:55',
    return_time: null,
    deleted_at: null,
    user_id: 1,
    material_id: 1,
    material: {
      name: 'Caixa de Som',
    },
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
        {history.map((m) => (
          <Track
            name={m.material.name}
            returnStatus={m.return_time ? 'DEVOLVIDO' : 'EMPRESTADO'}
            tooker={m.tooker_id}
            status={m.return_time ? 'Devolvido' : 'Não Devolvido'}
          />
        ))}
      </div>
      <Pagination>
        <MdKeyboardArrowLeft size={40} />
        <MdKeyboardArrowRight size={40} />
      </Pagination>
    </ActivityHistory>
  </Main>
);
// Name, Action, ReturnTime, TookerID, Status
export default Material;
