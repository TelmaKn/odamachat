import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface StoreState {
  featuresShow: boolean
}

const initialState: StoreState = {
  featuresShow: true,
}

export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    handleFeaturesShow: (state, action: PayloadAction<boolean>) => {
      state.featuresShow = action.payload
    },
  },
})

export const { handleFeaturesShow } = coreSlice.actions
export default coreSlice.reducer
