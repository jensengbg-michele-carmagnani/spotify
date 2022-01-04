import moment from 'moment';

export default function secondsToMinutesAndSeconds(millis) {
  let tempTime = moment.duration(millis);
  let seconds = tempTime.seconds();
  if (seconds < 10) {
    seconds = 0 + tempTime.seconds();
  }
  let duration = tempTime.minutes() + ':' + seconds;
  return duration;
}
