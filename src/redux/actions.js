import { API } from "../ApiListing";
import GetApiCall from "../apiCalling/GetApiCall";
import { store } from "../store";
import { productActions } from "./slice";

export const GetProducts = async () => {
  store.dispatch(productActions.onLoading({ data: true }));
  const result = await GetApiCall(API);

  if (result?.length > 0) {
    store.dispatch(productActions.storeProducts({ data: result }));
    store.dispatch(productActions.onLoading({ data: false }));
  } else {
    store.dispatch(productActions.onLoading({ data: true }));
  }
};

export const GetSingleProducts = async (url) => {
  store.dispatch(productActions.onLoading({ data: true }));
  const result = await GetApiCall(url);

  if (result) {
    store.dispatch(productActions.signleProduct({ data: result }));
    store.dispatch(productActions.onLoading({ data: false }));
  } else {
    store.dispatch(productActions.onLoading({ data: true }));
  }
};

export const AddProductToCart = (id, Color, amount, stock, product) => {
  const image = product.image[0].url;
  const price = product.price;
  store.dispatch(
    productActions.addToCart({
      data: { id, Color, amount, stock, image, price },
    })
  );
};

export const SetIncriment = (id) => {
  store.dispatch(productActions.increment({ data: id }));
};

export const SetDecriment = (id) => {
  store.dispatch(productActions.decriment({ data: id }));
};
