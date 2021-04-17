   a = new Date();
  let time = a.gethours + " : "+ a.getminutes+ " : "+a.getseconds;
  let date = a.tolocaleDateString;
  document.getElementById('time').innerHTML = date + time;