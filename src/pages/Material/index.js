import React from 'react';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Main, Materials, ActivityHistory, Pagination } from './style';
import Card from '../../components/Card';
import Track from '../../components/Track';

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
