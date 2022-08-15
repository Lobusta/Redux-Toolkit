import { takeEvery } from "redux-saga/effects";
import { fetchDataSaga } from "./sagas/shopSaga";



export default function* rootSaga() {
    yield takeEvery("FETCH_DATA_SAGA", fetchDataSaga);
  }
  