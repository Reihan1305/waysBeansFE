import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../lib/Api";


export const allCartByUser = createAsyncThunk<
ICart[],
void,
{ rejectValue: string }
>("product/", async (_, { rejectWithValue }) => {
try {
  const { data } = await API.get("/cart", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log(data);
  return data;
} catch (error) {
  return rejectWithValue("error");
}
});
