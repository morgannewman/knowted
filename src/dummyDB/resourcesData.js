const resourcesData = [
  {
    resource: {
      id: 12345,
      parent: {
        id: 54321,
        title: 'Knitting'
      },
      title: 'Needles',
      uri: 'http://something',
      last_opened: new Date().toLocaleString()
    }
  },

  {
    resource: {
      id: 123456,
      parent: {
        id: 102030,
        title: 'Martial Arts'
      },
      title: 'Karate',
      uri: 'http://something',
      last_opened: new Date().toLocaleString()
    }
  },
  {
    resource: {
      id: 1234567,
      parent: {
        id: 10204,
        title: 'Australia'
      },
      title: 'Kangaroos',
      uri: 'http://something',
      last_opened: new Date().toLocaleString()
    }
  }
];

export default resourcesData;
