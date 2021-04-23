export const repeationData = [
  {
    name: 'repeation',
    value: 0,
    description: `0`
  },
  {
    name: 'repeation',
    value: 1,
    description: `1`
  },
  {
    name: 'repeation',
    value: 2,
    description: `2`
  },
  {
    name: 'repeation',
    value: 3,
    description: `3`
  },
  {
    name: 'repeation',
    value: 4,
    description: `4+`
  },
];

export const incomeData = [
  {
    name: 'income',
    value: 'newcomer',
    description: 'Я начинающий предприниматель',
    id: 1
  },
  {
    name: 'income',
    value: '0-100000',
    description: '0 - 100 000 рублей',
    id: 2
  },
  {
    name: 'income',
    value: '100000-200000',
    description: '100 000 - 200 000 рублей',
    id: 3
  },
  {
    name: 'income',
    value: '200000-300000',
    description: '200 000 - 300 000 рублей',
    id: 4
  },
  {
    name: 'income',
    value: 'more than 300000',
    description: 'Свыше 300 000 рублей',
    id: 5
  }
];

export const formatData = [
  {
    name: 'leadership-format',
    value: 'online',
    description: 'Онлайн',
    id: 1
  },
  {
    name: 'leadership-format',
    value: 'offline',
    description: 'Офлайн',
    id: 2
  },
];

export const statusData = [
  {
    name: 'business-type',
    value: 'start',
    description: 'Запуск (для предпринимателей от 0 до 300 000 руб/мес)',
    id: 1
  },
  {
    name: 'business-type',
    value: 'breakthrough',
    description: 'Прорыв (для предпринимателей 300 000 + руб/мес)',
    id: 2
  },
];

export const Path = {
  DEFAULT: `/`,
  MENTOR: `/mentor`,
  AUTHORIZATION: `/authorization`,
  CODE_PAGE: `/code-page`
}

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const DirectionTypeId = {
  START: 1,
  BREAKTHROUGH: 2,
  START_AND_BREAKTHROUGH: 3
};

export const EducationTypeId = {
  OFFLINE: 1,
  ONLINE: 2,
  OFFLINE_AND_ONLINE: 3
};

export const Income = {
  MORE_300000: 'more than 300000',
  LESS_300000: '299'
}

export const BASE_URL = `http://94.130.230.165:8088`;

// export const BASE_URL = `https://1624b219e24c.ngrok.io`;