import React, { createContext, useReducer } from 'react'

/**
 * Automate context creation
 * @param {*} reducer
 * @param {*} actions
 * @param {*} initialState
 * @param {func} init
 */
const generator = (
	reducer,
	actions,
	initialState,
	init = () => initialState
) => {
	const Context = createContext()

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState, init)

		const boundActions = {}
		for (let key in actions) {
			boundActions[key] = actions[key](dispatch)
		}

		return (
			<Context.Provider value={{ state, ...boundActions }}>
				{children}
			</Context.Provider>
		)
	}

	return {
		Context,
		Provider,
	}
}

export { generator }
