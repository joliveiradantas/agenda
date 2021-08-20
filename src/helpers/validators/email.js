export const EMAIL_REGEX = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export default function email(value = '') {
  if (!value) {
    return false;
  }

  if (EMAIL_REGEX.test(value)) {
    return false;
  }

  return true;
}

email.message = function message(value, options = {}) {
  return options.message || 'não é um e-mail válido';
};
