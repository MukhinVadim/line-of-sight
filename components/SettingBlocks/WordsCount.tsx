import {useContext} from "react";
import {SettingBlock} from "./SettingBlock";
import SettingsContext from "../context/SettingsContext";

export const WordsCount: React.FC = () => {

	const {state} = useContext(SettingsContext)

	const scale = []
	for (let i=1; i<=10; i++) {
		scale.push(i)
	}
	const title = "Сколько слов"

	return (
		<SettingBlock scale={scale} title={title} type="wordsCount" value={state.wordsCount}/>
	)
}