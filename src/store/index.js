import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";

const store = configureStore({
    devTools: true,
    reducer,
});

store.subscribe(() => console.log("Cambio el estado"));

export default store;