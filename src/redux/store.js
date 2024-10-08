// import { configureStore } from "@reduxjs/toolkit";
// import proReducer from "./proSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   createWebStorage
// } from "redux-persist";

// // Function to create a dummy storage if running on the server
// function createPersistStore() {
//   const isServer = typeof window === "undefined";

//   if (isServer) {
//     return {
//       getItem() {
//         return Promise.resolve(null);
//       },
//       setItem() {
//         return Promise.resolve();
//       },
//       removeItem() {
//         return Promise.resolve();
//       },
//     };
//   }
//   return createWebStorage("local");
// }

// const storage =
//   typeof window !== "undefined"
//     ? createWebStorage("local")
//     : createPersistStore();

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, proReducer);

// export const store = configureStore({
//   reducer: { pro: persistedReducer },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);




















import { configureStore } from "@reduxjs/toolkit";
import proReducer from "./proSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

function createPersistStore() {
  const isServer = typeof window === "undefined";
  // Returns noop (dummy) storage
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}

const storage = typeof window !== "undefined"
  ? createWebStorage("local")
  : createPersistStore();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, proReducer);

export const store = configureStore({
  reducer: { pro: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

