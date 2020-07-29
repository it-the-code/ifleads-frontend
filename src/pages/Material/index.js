import React, { useEffect, useState } from 'react';
import { compareDesc, formatRelative, parseISO, toDate } from 'date-fns';
import { pt } from 'date-fns/locale';
import { Main, Materials, NotFoundMaterials } from './style';
import Card from '../../components/Card';
import ActivityHistory from '../../components/ActivityHistory';
import api from '../../services/api';

const Material = () => {
  const [materials, setMaterials] = useState([]);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const getMaterials = async () => {
      const { data } = await api.get('/materials');
      setMaterials(data);
    };
    getMaterials();
  }, []);

  useEffect(() => {
    api.get('/loans').then(({ data }) => {
      if (data.length !== 0) {
        const formattedLoans = data
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
    });
  }, []);
  return (
    <Main>
      <Materials>
        {materials.length !== 0 ? (
          materials
            .slice()
            .sort((a, b) => b.amount - a.amount)
            .map((e) => (
              <Card
                key={e.id}
                name={e.name}
                description={e.description}
                hasMaterials={e.amount !== 0}
              />
            ))
        ) : (
          <NotFoundMaterials>Não há materiais cadastrados</NotFoundMaterials>
        )}
      </Materials>
      <ActivityHistory loans={loans} />
    </Main>
  );
};

export default Material;
