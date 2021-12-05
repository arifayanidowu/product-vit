import productReducer, {
  addToBasket,
  removeFromBasket,
  clearBasket,
} from "./productSlice";

describe("product reducer", () => {
  const initialState = {
    status: "idle",
    loading: false,
    products: [],
    product: null,
    config: null,
    basket: [],
    error: null,
  };
  const product = {
    name: "Vitamin C",
    price: 4.5,
    nutrients: [
      {
        id: "vitamin-c",
        amount: 500,
      },
    ],
  };

  it("should handle product initialState", () => {
    expect(productReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should add product item to basket", () => {
    const actual = productReducer(initialState, addToBasket(product));
    expect(actual.basket).toContain(product);
  });

  it("should remove product from basket", () => {
    const actual = productReducer(initialState, removeFromBasket(product));
    expect(actual.basket).not.toContain(product);
  });

  it("should clear basket", () => {
    const actual = productReducer(initialState, clearBasket());
    expect(actual.basket).toEqual([]);
  });
});
