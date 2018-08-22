import { UPDATE_TAB } from '../actions/tab.js';


const tab = (state = {tab: ''}, action) => {
  switch (action.type) {
    case UPDATE_TAB:
      return {
        'clicks': state.clicks + 1,
        'value': state.value + 1
      };
    case DECREMENT:
      return {
        'clicks': state.clicks + 1,
        'value': state.value - 1
      };
    default:
      return state;
  }
};

export default tab;