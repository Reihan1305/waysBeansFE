import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "./slice/authSlice";
import allProductReducer from "./slice/allProductSlice";
import detailProductReducer from "./slice/detailProductSlice";
import detailCartReducer from "./slice/detailCartSlice";
import alltransactionUserReducer from "./slice/alltransactionUserSlice";
import transactionSellerReducer from "./slice/transactionSellerSilce";
import allCartReducer from "./slice/cartSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    allProduct: allProductReducer,
    detailProduct: detailProductReducer,
    detailCart: detailCartReducer,
    allTransactionUser: alltransactionUserReducer,
    allTransactionSeller: transactionSellerReducer,
    allCart:allCartReducer
  },
});

// static type untuk selector dan dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks yang sudah diberi static type
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
