import Ember from 'ember';

export function formatDate(date) {
  return moment(date[0]).format('YYYY-MM-DD');
}

export default Ember.helper(formatDate);
