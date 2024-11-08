import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: Failed to fetch employees`);
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Something went wrong while fetching employees');
    }
  }
);
