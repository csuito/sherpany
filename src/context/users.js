import { generator as createContext } from './generator'

const reducer = (state, action) => {
	switch (action.type) {
		case 'search': {
			const searchTerm = action.payload
			const renderUsers = [...state.users].filter((user) =>
				`${user.name.first} ${user.name.last}`
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
			)
			return { ...state, renderUsers }
		}
		case 'setUsers': {
			const users = [...action.payload]
			return { ...state, users, renderUsers: [...users] }
		}
		default:
			return { ...state }
	}
}

const actions = {
	search: (dispatch) => (payload) => {
		dispatch({ type: 'search', payload })
	},
	setUsers: (dispatch) => (payload) => {
		dispatch({ type: 'setUsers', payload })
	},
}

const initialState = {
	users: [],
	renderUsers: [],
}

const { Context, Provider } = createContext(reducer, actions, initialState)

export { Context, Provider }
