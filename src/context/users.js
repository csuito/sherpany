import { generator as createContext } from './generator'

const reducer = (state, action) => {
	switch (action.type) {
		case 'search': {
			const renderUsers = [...state.users].filter((user) =>
				`${user.name.first} ${user.name.last}`
					.toLowerCase()
					.includes(action.payload.toLowerCase())
			)
			return { ...state, renderUsers, searching: !!action.payload }
		}
		case 'setUsers': {
			const users = [...action.payload]
			return { ...state, users, renderUsers: [...users] }
		}
		case 'toggleModal': {
			const showUser = action.payload || {}
			const showModal = !state.showModal
			return { ...state, showUser, showModal }
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
	toggleModal: (dispatch) => (payload) => {
		dispatch({ type: 'toggleModal', payload })
	},
}

const initialState = {
	users: [],
	renderUsers: [],
	searching: false,
	showModal: false,
	showUser: {},
}

export const { Context, Provider } = createContext(
	reducer,
	actions,
	initialState
)
