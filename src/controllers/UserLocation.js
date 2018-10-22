import { update_user_location } from '../models/db';
import user from './User';

async function get_location() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (location) => { resolve(location); },
      (error) => { reject(error.message); },
    );
  });
}

const LOCATION_UPDATE_INTERVAL_MS = 2000;

setInterval(() => {
  if (!user()) return;
  get_location().then((data) => { update_user_location(data); });
}, LOCATION_UPDATE_INTERVAL_MS);

export { get_location };
