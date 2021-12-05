import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Axios from "src/services/axiosService";

interface State {
  status: string;
  loading: boolean;
  products: Vitl.Product[];
  product: Vitl.Product | any;
  config: Vitl.IConfig | any;
  basket: Vitl.Product[];
  error: any;
}

const initialState: State = {
  status: "idle",
  loading: false,
  products: [],
  product: null,
  config: null,
  basket: [],
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await Axios.get("fe-test.json");
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const checkIfExceeds = (
  basket: Vitl.Product[],
  product: Vitl.Product,
  config: Vitl.IConfig
) => {
  let isCheck: boolean = false;
  let label: any;

  basket.map((item) =>
    item.nutrients.filter((nutri) =>
      product.nutrients.filter((prod) => {
        if (nutri.id === prod.id) {
          let count = item.nutrients
            .filter((val) => val.id === prod.id)
            .reduce((prev, cur) => {
              return prev + cur.amount;
            }, prod.amount);
          return config.tolerableUpperLimits.filter((val) => {
            if (count > val.amount) {
              isCheck = true;
              label = val.id;
            } else {
              label = null;
              isCheck = false;
            }
            return { isCheck, label };
          });
        } else {
          return null;
        }
      })
    )
  );

  return {
    isCheck,
    label,
  };
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      state.basket = [...state.basket, payload];
      state.products = state.products.filter(
        (item) => item.name !== payload?.name
      );
    },
    clearBasket: (state) => {
      state.basket = [];
    },
    removeFromBasket: (state, { payload }) => {
      state.basket = state.basket.filter((item) => item.name !== payload?.name);
      state.products.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, _) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload?.products;
        state.config = payload?.config;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.products = [];
        state.config = {};
        state.error = error;
        state.status = "idle";
      });
  },
});

const { reducer, actions } = productSlice;

export const { addToBasket, clearBasket, removeFromBasket } = actions;

export default reducer;
