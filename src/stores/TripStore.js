import { observable, action, computed } from 'mobx';

class TripStore {
  @observable trips = [
    {
      name: 'Lissbon1',
      img: '/images/1.jpg'
    },
    {
      name: 'Lissbon2',
      img: '/images/2.jpg'
    },
    {
      name: 'Lissbon3',
      img: '/images/3.jpg'
    },
    {
      name: 'Lissbon4',
      img: '/images/4.jpg'
    }
  ];

  @action
  addTrip = trip => {
    this.trips.push(trip);
  };
  getTrip(id){
    return this.trips.find( trip => trip.name === id );
  }
  @computed
  get tripCount() {
    return this.trips.length;
  }
}

const store = new TripStore();
export default store;
