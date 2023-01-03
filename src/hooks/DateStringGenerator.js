const DateStringGenerator = (date) => {
  console.log(date);
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 1).toString();

  var day = (date.getDay() + 1).toString();
  return year + "년 " + month + "월 " + day + "일";
};
export default DateStringGenerator;
