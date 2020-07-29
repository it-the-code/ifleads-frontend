import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, Pagination, Button, NotFoundLoans } from './style';
import Track from '../Track';

const ActivityHistory = ({ loans }) => {
  const offset = 3;
  const [page, setPage] = useState(1);
  const [start, end] = useMemo(() => {
    const e = page * offset;
    const s = e - offset;

    return [s, e];
  }, [page]);

  return (
    <Container>
      <div>
        <h1>Registro de Atividades</h1>
        {loans.length !== 0 ? (
          loans
            .slice(start, end)
            .map((l) => (
              <Track
                key={l.id}
                name={l.material.name}
                returnStatus={l.return_time ? 'DEVOLVIDO' : 'EMPRESTADO'}
                tooker={l.tooker_id}
                status={l.return_time ? 'Devolvido' : 'Não Devolvido'}
                time={l.return_time ? l.return_time : l.loan_time}
              />
            ))
        ) : (
          <NotFoundLoans>Nada no histórico para ser exibido</NotFoundLoans>
        )}
      </div>
      <Pagination>
        <Button
          type="button"
          disabled={start === 0}
          onClick={() => setPage(page - 1)}
        >
          <MdKeyboardArrowLeft size={40} />
        </Button>
        <Button
          type="button"
          disabled={end >= loans.length}
          onClick={() => setPage(page + 1)}
        >
          <MdKeyboardArrowRight size={40} />
        </Button>
      </Pagination>
    </Container>
  );
};

ActivityHistory.propTypes = {
  loans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tooker_id: PropTypes.string.isRequired,
      return_type: PropTypes.object,
      deleted_at: PropTypes.string,
      user_id: PropTypes.number.isRequired,
      material_id: PropTypes.number.isRequired,
      material: PropTypes.object.isRequired,
      updated_at: PropTypes.object,
    })
  ).isRequired,
};

export default ActivityHistory;
