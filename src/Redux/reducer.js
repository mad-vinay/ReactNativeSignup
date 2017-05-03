export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'POPULATION_DATA':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
