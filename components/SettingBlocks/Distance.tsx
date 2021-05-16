import {useContext} from "react";
import {SettingBlock} from "./SettingBlock";
import SettingsContext from "../context/SettingsContext";

export const Distance: React.FC = () => {

	const {state} = useContext(SettingsContext)

	const scale = []
	for (let i=5; i<=40; i+=5) {
		scale.push(i)
	}
	const title = "Стартовое расстояние"

	return (
		<SettingBlock scale={scale} title={title} type="distance" value={state.distance}/>
	)
}