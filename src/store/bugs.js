//action types
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

//actions created

export function bugAdded(description) {
  return {
    type: BUG_ADDED,
    payload: {
      description: description
    }
  };
}

export function bugRemoved(id) {
  return {
    type: BUG_REMOVED,
    payload: {
      id: id
    }
  };
}

export function bugResolved(id) {
  return {
    type: BUG_RESOLVED,
    payload: {
      id: id
    }
  };
}

//reducers

let currID = 0;

//initial state is defined by undefined by redux. we need to reassign the state.

export default function reducer(state = [], action) {
  if (action.type === BUG_ADDED) {
    return [
      ...state,
      {
        id: ++currID,
        description: action.payload.description,
        resolved: false
      }
    ];
  } else if (action.type === BUG_REMOVED) {
    return state.filter(bug => bug.id !== action.payload.id);
  } else if (action.type === BUG_RESOLVED) {
    return state.map(bug =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );
  }

  return state;
}

// using Switch&Case:

function reducer1(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++currID,
          description: action.payload.description,
          resolved: false
        }
      ];
    case BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id);
    default:
      return state;
  }
}
