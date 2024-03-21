import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}
export const initialState: CounterState = {
  value: 0,
};

// 创建一个 Slice 
export const counter = createSlice({
  name: 'counter',
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义一个加的方法
    add: (state) => {
      state.value += 1;
    },
  },
});
// 导出加减的方法
export const { add } = counter.actions;

// 默认导出
export default counter.reducer;

