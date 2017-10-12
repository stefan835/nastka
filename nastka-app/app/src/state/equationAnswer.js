const GET = 'equationAnswer/GET';

export const equationGetAnswer = (answer) => ({
  type: GET,
  answer
});

const initialState = {
  answer: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        answer: action.answer
      };
    default:
      return state
  }
}

