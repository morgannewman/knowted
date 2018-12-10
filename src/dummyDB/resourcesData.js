const resourcesData = [
  {
    id: 12345,
    parent: {
      id: 54321,
      title: 'Knitting'
    },
    title: 'Needles',
    uri: 'http://something',
    completed: false,
    last_opened: new Date().toLocaleString()
  },

  {
    id: 123456,
    parent: {
      id: 102030,
      title: 'Martial Arts'
    },
    title: 'Karate',
    uri: 'http://something',
    completed: false,
    last_opened: new Date().toLocaleString()
  },
  {
    id: 1234567,
    parent: {
      id: 10204,
      title: 'Australia'
    },
    title: 'Kangaroos',
    uri: 'http://something',
    completed: true,
    last_opened: new Date().toLocaleString()
  }
];

export default resourcesData;
