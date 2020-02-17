const utils = {};

utils.dateYesterday = function(dateToday){
  let dateYesterdat = new Date(dateToday);
  dateYesterdat.setDate(dateYesterdat.getDate() - 1);
  dateYesterdat = dateYesterdat.toISOString().slice(0,10);
  return dateYesterdat;
};

export default utils;
