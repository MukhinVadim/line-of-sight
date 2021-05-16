import styled from '@emotion/styled'
import {useState} from "react";

const Numbers = styled.div`
	width: 600px;
	margin-top: 13.55px;
	margin-left: 10px;
	display: flex;
	font-size: 38.5998px;
	justify-content: space-between;
`

const Box = styled.div`
	text-align: center;
	width: 100%;
	height: 100%;
	background: #FFFFFF;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 48.2498px;
`

const Wrapper = styled.div`
	display: inline-flex;
	flex-direction:column;
	align-items: center;
	margin-top: 32px;
`

const Title = styled.span`
	font-size: 48.2498px;
	color: #371548;
`

const Slider = styled.input`
	margin-top: 25.65px;
	width: 100%;
	-webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 23px;
  border-radius: 40px;
  background: ${(props) =>
	`linear-gradient(to right, #FDD207 0%, #FDD207 ${(+props.value-(+props.min))/(+props.max-(+props.min))*100}%, 
	#fff ${(+props.value-(+props.min))/(+props.max-(+props.min))*100}%, #fff 100%);`};
	cursor: pointer;
	
	 ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 43.91px;
    height: 43.91px;
    background-image: radial-gradient(circle, #0E0C0B 30%, #FDD207 32%);
    border-radius: 50%;
  }
  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #0E0C0B 30%, #FDD207 32%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`

interface WordsCountProps {
	scale: number[]
	title: string
	setter: any
}

export const SettingBlock: React.FC<WordsCountProps> = (props) => {
	const scaleMin = Math.min(...props.scale)
	const scaleMax = Math.max(...props.scale)
	const step = props.scale[1] - props.scale[0]


	const [value, setValue] = useState(`${scaleMax}`);

	return (
		<Box>
			<Wrapper>
				<Title>{props.title}</Title>
				<Numbers>
					{props.scale.map(count => {
						return (
							<div>{count}</div>
						)
					})}
				</Numbers>
				<Slider min={scaleMin}
								max={scaleMax}
								type="range"
								step={`${step}`}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setValue(e.target.value)
									props.setter(value)
								}}
								value={value}/>
			</Wrapper>
		</Box>
	)
}