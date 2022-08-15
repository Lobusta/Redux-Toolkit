import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const preloadedState = {
};
export const store = configureStore({
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  reducer: rootReducer,
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga)


export type RootState = ReturnType<typeof store.getState>;