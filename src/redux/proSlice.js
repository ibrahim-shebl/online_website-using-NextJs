import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: JSON.parse(localStorage.getItem('productData')) || [],
  favoriteData: JSON.parse(localStorage.getItem('favoriteData')) || [],
};

export const proSlice = createSlice({
  name: "pro",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
      // save in localStorage
      localStorage.setItem('productData', JSON.stringify(state.productData));
      console.log('Product added to cart:', state.productData); // تتبع التغييرات
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity++;
         // save in localStorage
        localStorage.setItem('productData', JSON.stringify(state.productData));
        console.log('Product quantity increased:', state.productData); // تتبع التغييرات
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity = Math.max(1, existingProduct.quantity - 1);
        // save in localStorage
        localStorage.setItem('productData', JSON.stringify(state.productData));
        console.log('Product quantity decreased:', state.productData); // تتبع التغييرات
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
       // save in localStorage
      localStorage.setItem('productData', JSON.stringify(state.productData));
      console.log('Product deleted:', state.productData); // تتبع التغييرات
    },
    resetCart: (state) => {
      state.productData = [];
       // save in localStorage
      localStorage.setItem('productData', JSON.stringify(state.productData));
      console.log('Cart reset:', state.productData); // تتبع التغييرات
    },
    addToFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        state.favoriteData = state.favoriteData.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        state.favoriteData.push(action.payload);
      }
       // save in localStorage
      localStorage.setItem('favoriteData', JSON.stringify(state.favoriteData));
      console.log('Favorite updated:', state.favoriteData); // تتبع التغييرات
    },
    deleteFavorite: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        (item) => item._id !== action.payload
      );
       // save in localStorage
      localStorage.setItem('favoriteData', JSON.stringify(state.favoriteData));
      console.log('Favorite deleted:', state.favoriteData); // تتبع التغييرات
    },
    resetFavorite: (state) => {
      state.favoriteData = [];
       // save in localStorage
      localStorage.setItem('favoriteData', JSON.stringify(state.favoriteData));
      console.log('Favorites reset:', state.favoriteData); // تتبع التغييرات
    },
     
     
  },
});

 
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addToFavorite,
  deleteFavorite,
  resetFavorite,
  addUser,
  deleteUser,
  addOrder,
  resetOrder,
} = proSlice.actions;

export default proSlice.reducer;
