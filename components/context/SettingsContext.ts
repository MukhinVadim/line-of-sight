import {createContext} from "react"

type State = {
	distance: number
	wordsCount: number
	lettersCount: number
	increaseDistance: number
	velocity: number
}
type Action = object
type Dispatch = (action: Action) => void


const SettingsContext = createContext<{ state: State; dispatch: Dispatch} | undefined>(undefined)

export default SettingsContext