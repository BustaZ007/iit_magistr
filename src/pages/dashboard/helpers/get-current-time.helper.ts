import moment from 'moment';

function getCurrentTime() {
  return moment(Date.now()).format('HH:mm · dddd, D MMMM');
}

export default getCurrentTime;
