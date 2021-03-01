import { getFullName, normalize } from '../util/strings'
import { generator as createContext } from './generator'

const reducer = (state, action) => {
	switch (action.type) {
		case 'search': {
			const renderUsers = [...state.users].filter((user) =>
				normalize(getFullName(user.name))
					.toLowerCase()
					.includes(normalize(action.payload).toLowerCase())
			)
			return { ...state, renderUsers, searching: !!action.payload }
		}
		case 'setUsers': {
			const users = [...action.payload]
			return { ...state, users, renderUsers: [...users] }
		}
		case 'setPage': {
			return { ...state, page: action.payload }
		}
		case 'toggleModal': {
			const showUser = action.payload || {}
			const showModal = !state.showModal
			return { ...state, showUser, showModal }
		}
		case 'setNationality': {
			const nationality = { ...action.payload }
			return { ...state, nationality }
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
	setPage: (dispatch) => (payload) => {
		dispatch({ type: 'setPage', payload })
	},
	toggleModal: (dispatch) => (payload) => {
		dispatch({ type: 'toggleModal', payload })
	},
	setNationality: (dispatch) => (payload) => {
		localStorage.setItem('nationality', JSON.stringify(payload))
		dispatch({ type: 'setNationality', payload })
	},
}

const initialState = {
	users: [],
	renderUsers: [],
	searching: false,
	showModal: false,
	showUser: {},
	page: 1,
	nationality: { label: 'All', value: 'ch,es,fr,gb' },
}

const getInitialState = () => ({
	...initialState,
	nationality:
		JSON.parse(localStorage.getItem('nationality')) || initialState.nationality,
})

export const { Context, Provider } = createContext(
	reducer,
	actions,
	initialState,
	getInitialState
)
