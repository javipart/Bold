import { ACTIONS } from "../models/constants";
import accountApi from "../api/accountApi";

const getAccountStatusSuccess = data => ({ type: ACTIONS.ACCOUNT_STATUS.GET, data });
const changeOptionDateSuccess = value => ({ type: ACTIONS.ACCOUNT_STATUS.OPTION_DATE, value });
const setLoadingSuccess = value => ({ type: ACTIONS.ACCOUNT_STATUS.SET_LOADING_ACCOUNT, value });
const setTotalSalesSuccess = value => ({ type: ACTIONS.ACCOUNT_STATUS.TOTAL_SALES, value });
const setFilterSuccess = value => ({ type: ACTIONS.ACCOUNT_STATUS.FILTER, value });

export function getAccountStatus() {
  return (dispatch, getState) => {
    dispatch(setLoadingSuccess(true));
    const state = getState();
    const { accountStatus } = state;
    const { optionDate, filter } = accountStatus;
    accountApi.getBalance(optionDate, filter).then((data) => {
      let totalSales = 0;
      data.forEach(item => {
        if (item.status) {
          totalSales += item.amount;
        }
      });
      dispatch(setTotalSalesSuccess(totalSales))
      dispatch(getAccountStatusSuccess(data));
      dispatch(setLoadingSuccess(false));
    }).catch(e => {
      dispatch(setLoadingSuccess(false));
    });
  }
}

export function changeOptionDate(option) {
  return dispatch => {
    dispatch(changeOptionDateSuccess(option));
    dispatch(setFilterSuccess('all'));
  };
}

export function setFilter(value) {
  return dispatch => {
    dispatch(setFilterSuccess(value));
  }
}