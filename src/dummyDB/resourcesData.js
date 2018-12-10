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
  },
  {
    id: 1234569,
    parent: {
      id: 10204,
      title: 'Australia'
    },
    title: 'Sydney',
    uri: 'http://something',
    completed: false,
    last_opened: new Date().toLocaleString()
  },
  {
    id: 1239569,
    parent: {
      id: 10204,
      title: 'Australia'
    },
    title: 'Koalas',
    uri: 'http://something',
    completed: false,
    last_opened: new Date().toLocaleString()
  },
  {
    id: 1238569,
    parent: {
      id: 10204,
      title: 'Australia'
    },
    title: 'Coral Reef',
    uri: 'http://something',
    completed: false,
    last_opened: new Date().toLocaleString()
  },
  {
    id: 1983456,
    parent: {
      id: 102030,
      title: 'Martial Arts'
    },
    title: 'Kendo',
    uri: 'http://something',
    completed: false,
    last_opened: new Date().toLocaleString()
  },
  {
    id: 2333456,
    parent: {
      id: 102030,
      title: 'Martial Arts'
    },
    title: 'Judo',
    uri: 'http://something',
    completed: false,
    last_opened: new Date().toLocaleString()
  }
];

export default resourcesData;
