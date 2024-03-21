import { configureStore } from '@reduxjs/toolkit';
import counter, { CounterState } from './counter.ts';

// 定义全局类型
declare global {
  interface AppStore {
    counter: CounterState;
  }
}

const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter
  },
});


export default store;


