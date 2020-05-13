import { all, takeLatest } from "redux-saga/effects";

import { store } from "~/store/index";

export function* moduloExterno({ payload }) {
  const { modulo } = payload;

  const aba = window.open();
  aba.document.write("carregando...");
}

export default all([takeLatest("@externo/VIRTUAL_MODULO", loadPage)]);


