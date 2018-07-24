import { observable, action, computed } from 'mobx';

class SpotStore {
  @observable spots = [
    {
      name: 'Lissbon1',
      img: '/images/1.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ullamcorper felis, in feugiat nisi. Etiam congue tellus eu turpis sollicitudin, et vulputate ex faucibus. Nam maximus nisl orci, eu auctor lacus molestie et. Praesent tristique metus a vehicula elementum. Suspendisse potenti. Mauris eleifend elit eget erat porta, ac viverra magna suscipit. Mauris pretium vel elit in aliquet. Etiam a pharetra nunc. Duis massa sapien, congue nec tortor sed, dapibus finibus massa. Sed at metus at justo venenatis euismod. Curabitur diam ante, molestie quis interdum eu, posuere non metus. '
    },
    {
      name: 'Lissbon2',
      img: '/images/2.jpg',
      desc: 'Maecenas eget sem congue, mollis magna quis, pretium purus. Ut erat erat, maximus quis malesuada ut, faucibus eu ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
      name: 'Lissbon3',
      img: '/images/3.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ullamcorper felis, in feugiat nisi. Etiam congue tellus eu turpis sollicitudin, et vulputate ex faucibus. Nam maximus nisl orci, eu auctor lacus molestie et. Praesent tristique metus a vehicula elementum. Suspendisse potenti. Mauris eleifend elit eget erat porta, ac viverra magna suscipit. Mauris pretium vel elit in aliquet. Etiam a pharetra nunc. Duis massa sapien, congue nec tortor sed, dapibus finibus massa. Sed at metus at justo venenatis euismod. Curabitur diam ante, molestie quis interdum eu, posuere non metus. '
    },
    {
      name: 'Lissbon4',
      img: '/images/4.jpg',
      desc: 'Maecenas eget sem congue, mollis magna quis, pretium purus. Ut erat erat, maximus quis malesuada ut, faucibus eu ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    }
  ];

  @action
  addSpot = spot => {
    this.spots.push(spot);
  };
  getSpot(id){
    return this.spots.find( spot => spot.name === id );
  }
  @computed
  get spotCount() {
    return this.spots.length;
  }
}

const store = new SpotStore();
export default store;
