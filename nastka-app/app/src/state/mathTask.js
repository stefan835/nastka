const SET = 'task/SET';

export const getTask = (task) => ({
  type: SET,
  task
});

const initialState = {
  task: {
    equation: "",
    answer: ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case  SET:
      return {
        task: action.task
      };
    default:
      return state
  }
}

