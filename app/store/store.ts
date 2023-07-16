import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import productReducer from './slices/product';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
