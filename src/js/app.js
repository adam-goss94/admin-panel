const app = {
  initChart: function(){
    const thisApp = this;

    thisApp.ctx = document.getElementById('myChart').getContext('2d');
    // eslint-disable-next-line no-undef
    thisApp.chart = new Chart(thisApp.ctx, {
      // 1
      type: 'bar',
      data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [{
          // 4
          label: 'Signups',
          // 5
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          // 6
          data: [ 52, 51, 41, 94, 26, 6, 72, 99, 21, 88 ],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          // 7
          hidden: true,
        }]
      },
    });
  },

  initDate: function(){
    const thisApp = this;
    thisApp.dateFrom = document.querySelector('.date-from');
    thisApp.dateTo = document.querySelector('.date-to');
    thisApp.dateToday = new Date().toISOString().slice(0,10);
    thisApp.dateYesterday = dateYesterday(thisApp.dateToday);

    thisApp.dateFrom.value = thisApp.dateYesterday;
    thisApp.dateTo.value = thisApp.dateToday;
  },

  init: function(){
    this.initChart();
    this.initDate();
  }
};

app.init();

function dateYesterday(dateToday){
  let dateYesterdat = new Date(dateToday);
  dateYesterdat.setDate(dateYesterdat.getDate() - 1);
  dateYesterdat = dateYesterdat.toISOString().slice(0,10);
  return dateYesterdat;
}
