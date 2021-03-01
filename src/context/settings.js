import { generator as createContext } from './generator'

const reducer = (state, action) => {
	switch (action.type) {
		case 'setNationality': {
			const newState = { nationality: { ...action.payload } }
			return { ...newState }
		}
		default:
			return state
	}
}

const actions = {
	setNationality: (dispatch) => (payload) => {
		localStorage.setItem('nationality', JSON.stringify(payload))
		dispatch({ type: 'setNationality', payload })
	},
}

const initialState = {
	nationality: { label: 'All', value: 'ch,es,fr,gb' },
}

const getInitialState = () => {
	return {
		nationality:
			JSON.parse(localStorage.getItem('nationality')) ||
			initialState.nationality,
	}
}

const { Context, Provider } = createContext(
	reducer,
	actions,
	initialState,
	getInitialState
)

export { Context, Provider }
