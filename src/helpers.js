export const dateFormatter = (date, type) => {
  const d = new Date(date);
  const options = type === "short" ? { month: 'short', day: '2-digit' } : { month: 'short', day: '2-digit', year: 'numeric' };
  return new Intl.DateTimeFormat('en', options).format(d);
}

export const sortArrayASC = arr => {
  return arr.sort((a, b) => a - b);
}

export const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
