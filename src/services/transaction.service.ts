import { apiSlice } from "./base-query";

export const transactionApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    checkAvailabilty: build.mutation({
      query: (payload) => ({
        url: "/transaction/is-available",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useCheckAvailabiltyMutation } = transactionApi;
