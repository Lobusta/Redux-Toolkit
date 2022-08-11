import { call, takeEvery, put } from "redux-saga/effects";
import { getShop } from "./shopSlice";


 const getShopfromURL = async () =>{
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
    return data.json();
  };

export function* fetchDataSaga():any {
  try {
    let result = yield call(getShopfromURL)
    yield put(getShop(result));
  } catch (e) {
    yield put({ type: "FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery("FETCH_DATA_SAGA", fetchDataSaga);
}
