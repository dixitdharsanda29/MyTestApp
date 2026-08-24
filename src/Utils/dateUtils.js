import moment from 'moment';

export const appDisplayDate = date => {
  if (!date) return '';
  return moment(date).format('DD MMM YYYY');
};
