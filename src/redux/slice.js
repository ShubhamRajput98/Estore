import { createSlice } from "@reduxjs/toolkit";

const getCartData = () => {
  const cart = localStorage.getItem("cart");
  if (cart === null) {
    return [];
  } else {
    return JSON.parse(cart);
  }
};

const initialState = {
  loading: false,
  products: [],
  featureProducts: [],
  singleProduct: {},
  cart: getCartData(),
  subTotal: 0,
  layOut: true,
  filterData: [],
  shipingFeesh: 5000,
  sortData: "lowest",
  text: "",
  minPrice: 0,
  maxPrice: 0,
  price: 0,
  category: "All",
  company: "All",
  colors: "",
};

const productSlice = createSlice({
  name: "products",
  initialState: { ...initialState },
  reducers: {
    storeProducts(state, action) {
      state.products = action.payload.data;
      state.filterData = action.payload.data;

      state.featureProducts = action.payload.data?.filter(
        (item) => item?.featured === true
      );

      state.maxPrice = action.payload.data.reduce(
        (max, product) => (product.price > max ? product.price : max),
        action.payload.data[0].price
      );

      state.minPrice = action.payload.data.reduce(
        (min, product) => (product.price < min ? product.price : min),
        action.payload.data[0].price
      );
    },
    signleProduct(state, action) {
      state.singleProduct = action.payload.data;
    },
    getSubTotal(state, action) {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.price * item.amount;
      });

      return {
        ...state,
        subTotal: total,
      };
    },
    addToCart(state, action) {
      const { id } = action.payload.data;
      const isAvalable = state.cart.filter(
        (item) => item.id.toLowerCase() === id.toLowerCase()
      );
      if (isAvalable.length > 0) {
        return { ...state };
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return {
        ...state,
        cart: [...state.cart, action.payload.data],
      };
    },
    increment(state, action) {
      const id = action.payload.data;
      state.cart.forEach((item) => {
        if (item.id === id) {
          item.amount += 1;
          if (item.amount >= item.stock) {
            item.amount = item.stock;
          }
        }
      });
    },
    decriment(state, action) {
      const id = action.payload.data;
      state.cart.forEach((item) => {
        if (item.id === id) {
          item.amount = item.amount - 1;
          if (item.amount < 1) {
            item.amount = 1;
          }
        }
      });
    },
    removeCartItem(state, action) {
      const id = action.payload.data;
      const newCart = state.cart.filter((item) => item.id !== id);

      return {
        ...state,
        cart: newCart,
      };
    },
    clearCart(state, action) {
      return {
        ...state,
        cart: [],
        subTotal: 0,
      };
    },
    productLayOut(state, action) {
      state.layOut = action.payload.data;
    },
    setFilterValues(state, action) {
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value,
      };
    },
    sortProducts(state, action) {
      let data = [...state.filterData];

      if (state.sortData === "lowest") {
        data = data.sort((a, b) => a.price - b.price);
      }
      if (state.sortData === "highest") {
        data = data.sort((a, b) => b.price - a.price);
      }
      if (state.sortData === "a-z") {
        data = data.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sortData === "z-a") {
        data = data.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return {
        ...state,
        filterData: data,
      };
    },
    filterProducts(state, action) {
      let { products } = state;
      let tempFilterProduct = [...products];
      const { text, category, company, colors, price } = state;

      if (text) {
        state.text = text;

        tempFilterProduct = tempFilterProduct.filter((item) =>
          Object.values(item).some(
            (value) =>
              (typeof value === "string" &&
                value.toLowerCase().includes(text)) ||
              (typeof value === "number" &&
                value.toString().toLowerCase().includes(text))
          )
        );
      }

      if (category) {
        tempFilterProduct = tempFilterProduct.filter((item) => {
          if (category === "All") {
            return item;
          }
          return item.category === category;
        });
      }

      if (company) {
        tempFilterProduct = tempFilterProduct.filter((item) => {
          if (company === "All") {
            return item;
          }
          return item.company === company;
        });
      }

      if (colors) {
        tempFilterProduct = tempFilterProduct.filter((item) => {
          if (colors === "All") {
            return item;
          }
          return item.colors.includes(colors);
        });
      }

      if (price) {
        state.price = price;

        tempFilterProduct = tempFilterProduct.filter((item) => {
          if (price === 0) {
            return item.price === price;
          }
          return item.price <= price;
        });
      }

      return {
        ...state,
        filterData: tempFilterProduct,
      };
    },
    clearFilters(state, action) {
      return {
        ...state,
        sortData: "lowest",
        text: "",
        minPrice: 0,
        maxPrice: 0,
        price: 0,
        category: "All",
        company: "All",
        colors: "",
      };
    },
    onLoading(state, action) {
      state.loading = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
