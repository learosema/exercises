/* eslint-disable no-unused-vars */

export const hey = (message) => {
  if (/^[\r\n\t\s]*$/.test(message)) {
    return 'Fine. Be that way!';
  }
  if (/^[A-Z\s]+\?$/.test(message)) {
    return 'Calm down, I know what I\'m doing!';
  }
  if (message.trim().endsWith('?')) {
    return 'Sure.';
  }
  if (/^[1-9\s\,]+$/.test(message)) {
    return 'Whatever.';
  }
  if (/^[A-Z1-9\s\,\%\^\*\@\#\$\(\)]+(([!1]*)!|)$/.test(message)) {
    return 'Whoa, chill out!';
  }
  return 'Whatever.';
};
