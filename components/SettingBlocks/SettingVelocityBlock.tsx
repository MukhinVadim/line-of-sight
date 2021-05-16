import styled from '@emotion/styled'
import {useState} from "react";


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
	margin-top: 30px;		
`

const Title = styled.span`
	font-size: 48.2498px;
	color: #371548;
`
const Input = styled.input`
	width: 126.55px;
	height: 60.11px;
	margin-left: 46px;
	margin-right: 16.2px;
	font-size: 47.99px;
	line-height: 56.24px;
	border: 1px solid black;
	border-radius: 20px;
	outline: none;
	text-align: center;
	font-family: Roboto, sans-serif;
`
const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	column-gap: 21.17px;
	margin-top: 15.82px;

`

const Button = styled.button`
	background: none;
	cursor: pointer;
`


export const SettingVelocityBlock: React.FC = (props) => {
	const [value, setValue] = useState(0)

	const increment = () => {
		value < 5 ? setValue(value + 0.5) : null
	}

	const decrement = () => {
		value > 1 ? setValue(value - 0.5) : null
	}


	return (
		<Box>
			<Wrapper>
				<Title>Скорость
					<Input type="text" value={value}/>сек.
					<ButtonContainer>
						<Button onClick={decrement}>
							<svg width="93" height="93" viewBox="0 0 93 93" fill="white" xmlns="http://www.w3.org/2000/svg">
								<rect x="80.9599" y="81.4369" width="67.8914" height="67.8914" transform="rotate(-180 80.9599 81.4369)"
											fill="black"/>
								<path
									d="M11.0298 92.4462L82.3872 92.4462C88.0448 92.4462 92.5811 87.8589 92.5811 82.2523L92.5811 10.8949C92.5811 5.28826 88.0448 0.700996 82.3872 0.700996L11.0298 0.700993C5.42318 0.700993 0.835918 5.28826 0.835918 10.8949L0.835915 82.2523C0.835915 87.8589 5.42318 92.4462 11.0298 92.4462ZM21.2237 41.4766L41.6116 41.4766L51.8055 41.4766L72.1933 41.4766L72.1933 51.6706L51.8055 51.6706L41.6116 51.6706L21.2237 51.6706L21.2237 41.4766Z"
									fill="#FDD207"/>
							</svg>
						</Button>
						<Button onClick={increment}>
							<svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="80.8767" y="81.4371" width="67.8914" height="67.8914" transform="rotate(-180 80.8767 81.4371)"
											fill="black"/>
								<path
									d="M10.9462 92.4461L82.3036 92.4461C87.9612 92.4461 92.4975 87.8589 92.4975 82.2522L92.4975 10.8949C92.4975 5.2882 87.9612 0.700935 82.3036 0.700935L10.9462 0.700932C5.33957 0.700932 0.7523 5.2882 0.7523 10.8948L0.752297 82.2522C0.752297 87.8589 5.33956 92.4461 10.9462 92.4461ZM21.1401 41.4766L41.5279 41.4766L41.5279 21.0888L51.7219 21.0888L51.7219 41.4766L72.1097 41.4766L72.1097 51.6705L51.7219 51.6705L51.7219 72.0583L41.5279 72.0583L41.5279 51.6705L21.1401 51.6705L21.1401 41.4766Z"
									fill="#FDD207"/>
							</svg>
						</Button>
					</ButtonContainer>
				</Title>

			</Wrapper>
		</Box>
	)
}