import {Box, Wrapper, Title, Numbers, Slider} from "../../public/styles/StyledComponents";
import SettingsContext from "../context/SettingsContext";
import {useContext} from "react";

type WordsCountProps = {
	type: string
	scale: number[]
	title: string
	value: number
}

export const SettingBlock: React.FC<WordsCountProps> = (props) => {

	const scaleMin = Math.min(...props.scale)
	const scaleMax = Math.max(...props.scale)
	const step = props.scale[1] - props.scale[0]

	const {dispatch} = useContext(SettingsContext)

	return (
		<Box>
			<Wrapper>
				<Title>{props.title}</Title>
				<Numbers>
					{props.scale.map(count => {
						return (
							<div key={count}>{count}</div>
						)
					})}
				</Numbers>
				<Slider min={scaleMin}
								max={scaleMax}
								type="range"
								step={`${step}`}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									dispatch({type: props.type, value: e.target.value})
								}}
								value={props.value}/>
			</Wrapper>
		</Box>
	)
}