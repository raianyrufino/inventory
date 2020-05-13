export function loadPage(modulo, url = null) {
    return {
      type: "@externo/LOAD_PAGE",
      payload: { url, modulo }
    };
  }