const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM: 'TOGGLE_ITEM',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED'
}

export const actionCreators = {
  addItem: (item) => {
   return {type: types.ADD_ITEM, payload: item}
  },
  removeItem: (i) => {
    return {type: types.REMOVE_ITEM, payload: i}
  },
  toggleItem: (i) => {
    return {type: types.TOGGLE_ITEM, payload: i}
  },
  removeCompleted: () => {
    return {type: types.REMOVE_COMPLETED, payload: null}
  }
}

const initialState = {
  items: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  const {items} = state;

  switch(type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        items: [{text: payload, checked: false}, ...items]
      }
    }
    case types.REMOVE_ITEM: {
      return {
        ...state,
        items: items.filter((todo,i) => i  != payload)
      }
    }
    case types.TOGGLE_ITEM: {
      return {
        ...state,
        items: items.map((item, i) => {
          if (i === payload) {
            return {text: item.text, checked: !item.checked}
          }
          return item
        }),
      }
    }
    case types.REMOVE_COMPLETED: {
      return {
        ...state,
        items: items.filter((item) => !item.checked)
      }
    }
    default: {
      return state
    }
  }
}
