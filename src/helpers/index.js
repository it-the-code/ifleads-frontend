import {
  toDate,
  differenceInDays,
  parseISO,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from 'date-fns';

export const formatActivityDate = (desiredDatetime) => {
  const now = new Date();
  const datetime = toDate(parseISO(desiredDatetime));
  const days = differenceInDays(now, datetime);
  if (days > 7) {
    return format(datetime, 'dd/LL/yyyy');
  }

  if (days <= 7 && days >= 1) {
    return `há ${days} dias`;
  }

  const hours = differenceInHours(now, datetime);
  if (hours >= 1) {
    return `há ${hours} horas`;
  }

  const minutes = differenceInMinutes(now, datetime);
  if (minutes > 1) {
    return `há ${minutes} minutos`;
  }

  const seconds = differenceInSeconds(now, datetime);
  return `há ${seconds} segundos`;
};
