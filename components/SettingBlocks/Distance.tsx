import {useContext, useState} from "react";
import {SettingBlock} from "./SettingBlock";
import SettingsContext from "../context/SettingsContext";

export const DistanceContainer: React.FC = (props) => {

	const {state} = useContext(SettingsContext)

	const scale = [5, 10, 15, 20, 25, 30, 35, 40]
	const title = "Стартовое расстояние"

	return (
		<SettingBlock scale={scale} title={title} type="distance" value={state.distance}/>
	)
}