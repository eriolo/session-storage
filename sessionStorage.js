const supportsStorage = () => {
  const mod = 'modernizr';

  try {
    window.sessionStorage.setItem(mod, mod);
    window.sessionStorage.removeItem(mod);
    return true;
  } catch (e) {
    return false;
  }
};

const add = (key, data) => {
  if (!supportsStorage()) {
    return false;
  }

  const dataAsJson = JSON.stringify(data);
  window.sessionStorage.setItem(key, dataAsJson);

  return true;
};

const get = key => {
  if (!supportsStorage()) {
    return false;
  }

  const data = window.sessionStorage.getItem(key);

  if (!data) {
    return null;
  }

  const parsed = JSON.parse(data);

  return parsed;
};

const remove = key => {
  if (!supportsStorage()) {
    return;
  }

  window.sessionStorage.removeItem(key);
};

export default {
  add,
  get,
  remove
};
