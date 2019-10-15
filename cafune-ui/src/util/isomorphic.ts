export const isBrowser = !!(typeof window !== 'undefined' && window);
export const isServer = !isBrowser;

export const setPadding = (size, wrapElement = 'body') => {
  if (isBrowser) {
    if (document.querySelector(wrapElement)) {
      document.querySelector(wrapElement).style.paddingBottom = size;
    }
  }
};
