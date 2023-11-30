import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../apis/AxiosInstance';

export const fetchHighlights = createAsyncThunk(
  'highlights/fetchHighlights',
  async () => {
    const response = await axiosInstance.get('/v1/highlights');
    return response.data;
  },
);
