import {useContext} from "react";
import {SettingBlock} from "./SettingBlock";
import SettingsContext from "../context/SettingsContext";

export const LettersCount: React.FC = () => {

	const {state} = useContext(SettingsContext)

	const scale = []
	for (let i=3; i<=16; i++) {
		scale.push(i)
	}
	const title = "Сколько букв"

	return (
		<SettingBlock scale={scale} title={title} type="lettersCount" value={state.lettersCount}/>
	)
}