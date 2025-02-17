import { legacy_createStore as createStore , combineReducers } from "redux";
import cartReducer from "./cart/reducer"
import authReducer from "./auth/authReducer";
import storage from "redux-persist/lib/storage"; 
import { persistReducer, persistStore } from "redux-persist";



const persistConfig = {
    key: "cart",
    storage,
    whitelist: ["cart", "auth"] 
};

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;
