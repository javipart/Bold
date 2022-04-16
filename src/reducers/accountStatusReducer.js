import { ACTIONS, initialState } from '../models/constants';

export default (state = initialState.accountStatus, action = {}) => {
  switch (action.type) {
    case ACTIONS.ACCOUNT_STATUS.GET:
      return { ...state, sales: action.data };
    case ACTIONS.ACCOUNT_STATUS.OPTION_DATE:
      return { ...state, optionDate: action.value };
    case ACTIONS.ACCOUNT_STATUS.SET_LOADING_ACCOUNT:
      return { ...state, loading: action.value };
    case ACTIONS.ACCOUNT_STATUS.TOTAL_SALES:
      return { ...state, totalSales: action.value };
    case ACTIONS.ACCOUNT_STATUS.FILTER:
      return { ...state, filter: action.value };
    default:
      return state;
  }
};
