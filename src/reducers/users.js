const user = {
  first_name: "Selva",
  last_name: "Ganapathy",
  avatar: ""
};

const initialState = 
  {
    users : [],
    filtered : [],
    search : ""
  }


export default function users(state = initialState, action) {

  switch (action.type) {
    case 'USER::LOAD':
      return [user]

    case 'USER::FILTER':
      return state.filter(todo =>
        todo.id !== action.id
      )

    default:
      return state
  }
}
