import { observable, action, computed } from 'mobx';

class TripStore {
  @observable trips = [];

  @action
  addTrip = trip => {
    this.trips.push(trip);
  };

  @computed
  get tripCount() {
    return this.trips.length;
  }
}

const store = new TripStore();
export default store;