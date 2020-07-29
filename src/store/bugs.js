import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

let currID = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        id: ++currID,
        description: action.payload.description,
        resolved: false
      });
    },
    bugResolved: (state, action) => {
      const index = state.findIndex(bug => bug.id === action.payload.id);
      state[index].resolved = true;
    },
    bugRemoved: (state, action) => {
      const index = state.findIndex(bug => bug.id === action.payload.id);
      state.splice(index, 1);
    }
  }
});

export default slice.reducer;
export const { bugAdded, bugResolved, bugRemoved } = slice.actions;

//actions created

// export const bugUpdated = createAction("bugUpdated");
// export const bugAdded = createAction("bugAdded");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");

// //reducers

// //initial state is defined by undefined by redux. we need to reassign the state. [] is state

// //redux toolkit uses immer under the hood. Therefore we do not need to make copies of the existing objects and arrays, it is done
// // via immer y produce function. the code is immutable

// export default createReducer([], {
//   bugAdded: (state, action) => {
//     state.push({
//       id: ++currID,
//       description: action.payload.description,
//       resolved: false
//     });
//   },
//   bugResolved: (state, action) => {
//     const index = state.findIndex(bug => bug.id === action.payload.id);
//     state[index].resolved = true;
//   }
// });

// // export default function reducer1(state = [], action) {
// //   switch (action.type) {
// //     case bugAdded.type:
// //       return [
// //         ...state,
// //         {
// //           id: ++currID,
// //           description: action.payload.description,
// //           resolved: false
// //         }
// //       ];
// //     case bugRemoved.type:
// //       return state.filter(bug => bug.id !== action.payload.id);

// //     case bugResolved.type:
// //       return state.map(bug =>
// //         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
// //       );

// //     default:
// //       return state;
// //   }
// }
