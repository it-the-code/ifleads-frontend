import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Main, Materials, ActivityHistory, Pagination } from './style';
import Card from '../../components/Card';
import Track from '../../components/Track';
import { formatActivityDate } from '../../helpers';

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

const Material = () => {
  const materials = useSelector((state) => state.materials);
  const loans = useMemo(
    () =>
      history.map((loan) => {
        if (!loan.return_time) {
          loan.loan_time = formatActivityDate(loan.loan_time);
          return loan;
        }
        loan.return_time = formatActivityDate(loan.return_time);
        return loan;
      }),
    []
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
      <ActivityHistory>
        <div>
          <h1>Registro de Atividades</h1>
          {loans.map((l) => (
            <Track
              key={l.id}
              name={l.material.name}
              returnStatus={l.return_time ? 'DEVOLVIDO' : 'EMPRESTADO'}
              tooker={l.tooker_id}
              status={l.return_time ? 'Devolvido' : 'Não Devolvido'}
              time={l.return_time ? l.return_time : l.loan_time}
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
};

export default Material;
