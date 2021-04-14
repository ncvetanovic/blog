//state postavljamo na prazan niz kao difoltnu vrednost jer ce da obradjuje niz
const ret = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ret;
