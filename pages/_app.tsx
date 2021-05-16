import {useReducer} from "react"
import SettingsContext from "../components/context/SettingsContext"


export const reducer = (state, action) => {
	switch(action.type) {
		case "distance":
			return {
				...state, distance: +action.value
			}
		case "wordsCount":
			return {
				...state, wordsCount: +action.value
			}
		case "lettersCount":
			return {
				...state, lettersCount: +action.value
			}
		case "increaseDistance":
			return {
				...state, increaseDistance: +action.value
			}
		case "incrementVelocity":
				return {
					...state, velocity: state.velocity + 0.5
				}
		case "decrementVelocity":
				return {
					...state, velocity: state.velocity - 0.5
				}
		default:
			return state
	}
}

export default function MyApp({Component, pageProps}) {

	const [state, dispatch] = useReducer(reducer, {
		distance: 25,
		wordsCount: 5,
		lettersCount: 6,
		increaseDistance: 25,
		velocity: 2.5,
	})


	return (
		<SettingsContext.Provider value={{
			dispatch, state
		}}>
			<Component {...pageProps} />
			<style jsx global>{`
				* {
					padding: 0;
					margin: 0;
					border: 0;
				}
				body {
				font-family: Roboto, sans-serif;
				} 
			`}
			</style>
		</SettingsContext.Provider>
	)
}