import React, { useEffect, useState } from 'react';
import { compareDesc, formatRelative, parseISO, toDate } from 'date-fns';
import { pt } from 'date-fns/locale';
import { Main, Materials } from './style';
import Card from '../../components/Card';
import ActivityHistory from '../../components/ActivityHistory';
import api from '../../services/api';

const Material = () => {
  const [materials, setMaterials] = useState([]);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    api
      .get('/materials')
      .then((response) => {
        if (response.status === 200) {
          setMaterials(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .get('/loans')
      .then((response) => {
        if (response.status === 200) {
          const formattedLoans = response.data
            .map((l) => {
              if (l.return_time) {
                l.return_time = formatRelative(
                  toDate(parseISO(l.return_time)),
                  new Date(),
                  {
                    locale: pt,
                  }
                );
              } else {
                l.loan_time = formatRelative(
                  toDate(parseISO(l.loan_time)),
                  new Date(),
                  {
                    locale: pt,
                  }
                );
              }
              l.updated_at = parseISO(l.updated_at);
              return l;
            })
            .sort((a, b) => compareDesc(a.updated_at, b.updated_at));
          setLoans(formattedLoans);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
