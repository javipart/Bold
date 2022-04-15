import data from './data.json';

export default class {
  static getBalance(optionDate, filter) {
    const now = new Date();
    let result = [];
    if (optionDate == 2) {
      const month = now.getMonth();
      result = data.filter(item => {
        const dateBalance = new Date(item.date);
        const monthBalance = dateBalance.getMonth();
        return monthBalance == month;
      });
    } else if (optionDate == 1) {
      const minDate = now.setDate(now.getDate() - now.getDay());
      result = data.filter(item => {
        const dateBalance = new Date(item.date);
        return dateBalance >= minDate;
      });
    } else {
      const minDate = now.setHours(0, 0, 0, 0);
      result = data.filter(item => {
        const dateBalance = new Date(item.date);
        return dateBalance >= minDate;
      });
    }
    let dataFilter = result;
    if (filter !== 'all') {
      dataFilter = result.filter(item => item.mode === filter);
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(dataFilter), 600);
    });
  }
}
