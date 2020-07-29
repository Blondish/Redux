import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.subscribe(() => console.log("Store changed", store.getState()));

store.dispatch(projectAdded({ name: "project 1" }));

store.dispatch(bugAdded({ description: "bug 1" }));

store.dispatch(bugResolved({ id: 1 }));

store.dispatch(bugRemoved({ id: 1 }));

console.log(store.getState());
