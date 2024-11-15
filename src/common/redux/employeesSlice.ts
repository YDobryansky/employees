import { fetchEmployees } from '@/common/gateway';
import { Employee } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type EmployeeState = {
  employees: Employee[];
  status: 'ok' | 'loading' | 'success' | 'failed';
  error: string | null;
};

const initialState: EmployeeState = {
  employees: [],
  status: 'ok',
  error: null
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEmployees.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<Employee[]>) => {
        state.status = 'success';
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch employees';
      });
  }
});

export const { setEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;
