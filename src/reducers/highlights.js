import {createSlice} from '@reduxjs/toolkit';
import {fetchHighlights} from '../actions/highlights';

const highlightsSlice = createSlice({
  name: 'highlights',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchHighlights.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default highlightsSlice.reducer;
