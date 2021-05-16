import {useContext, useState} from "react";
import {SettingBlock} from "./SettingBlock";
import SettingsContext from "../context/SettingsContext";

export const WordsCountContainer: React.FC = (props) => {

	const {state} = useContext(SettingsContext)

	const scale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const title = "Сколько слов"

	return (
		<SettingBlock scale={scale} title={title} type="wordsCount" value={state.wordsCount}/>
	)
}