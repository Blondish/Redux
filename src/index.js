import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";

const store = configureStore();

const unsubscribe = store.subscribe(() =>
  console.log("Store changed", store.getState())
);

store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugResolved(1));

// unsubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());
