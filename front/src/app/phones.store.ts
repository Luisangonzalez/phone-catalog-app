export const phones = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_ITEMS':
      return payload;
    case 'LOAD_SUCCESS':
      return payload;
    default:
      return state;
  }
};
