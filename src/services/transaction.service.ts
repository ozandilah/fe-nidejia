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
    transaction: build.mutation({
      query: (payload) => ({
        url: "/transaction",
        method: "POST",
        body: payload,
      }),
    }),
    getDetailTransaction: build.query({
      query: (id) => ({
        url: `/transaction/${id}`,
        method: "GET",
      }),
    }),
    getTransactions: build.query({
      query: () => ({
        url: "/transaction",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCheckAvailabiltyMutation,
  useTransactionMutation,
  useGetDetailTransactionQuery,
  useGetTransactionsQuery,
} = transactionApi;
