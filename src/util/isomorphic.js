export const isBrowser = !!(typeof window !== 'undefined' && window);
export const isServer = !isBrowser;

export const cookie = {
  set(name, value, expires) {
    const date = new Date();
    date.setTime(expires || date.getTime() + 24 * 60 * 60 * 1000);
    if (isBrowser) {
      document.cookie = `${name}=${
        name === 'token' ? value : escape(value)
      };expires=${date.toGMTString()};path=/;`;
    } else {
      if (ctx && ctx.cookies) {
        return ctx.cookies.set('name', value, {
          expires: expires,
          httpOnly: false
        });
      }
    }
    return this;
  },
  get(name) {
    if (isBrowser) {
      const cookies = document.cookie.split('; ');
      let temp;

      for (let i = 0, len = cookies.length; i < len; i++) {
        temp = cookies[i].split('=');
        if (name === temp[0]) {
          temp.shift();
          return unescape(temp.join('='));
        }
      }
    } else if (ctx) {
      if (ctx.cookies) {
        return ctx.cookies.get(name);
      }
    }
    return '';
  },
  remove(name) {
    const date = new Date();
    date.getTime() + -1 * 24 * 60 * 60 * 1000;
    cookie.set(name, '', date);
  }
};

export const QUrl = {
  getParam(name) {
    if (isBrowser) {
      const reg = new RegExp(`/[?&]${name}=([^&#]+)/`);
      const result = location.href.match(reg);
      return result ? result[1] : '';
    } else if (ctx) {
      return ctx.query[name] || '';
    }
    return '';
  },
  redirectTo(url) {
    if (isBrowser) {
      location.href = url;
    } else if (ctx) {
      ctx.redirect(url);
    }
  },
  getLocation() {
    if (isBrowser) {
      return location.href;
    } else if (ctx) {
      return ctx.href;
    }
    return '';
  }
};