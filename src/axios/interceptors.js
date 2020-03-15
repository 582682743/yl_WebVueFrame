export const request = config => config;

export const response = _response => {
  const { status, statusText = '', data = {} } = _response || {};
  let message = statusText;
  let c = '';

  if (status === 200) {
    const { code, msg = '', data: res } = data;

    if (code === 0) {
      return res || msg;
    }

    if (code === 403 || code === 10001) {
      // return logout();
    }

    message = msg || '';
    c = code || '';
  }

  const e = new Error(message);
  e.code = c;

  throw e;
};
