function showNumberOfDays(month,year) {
 result = new Date(year, month, 0).getDate();
 console.log(result);
}


showNumberOfDays(1, 2012)