import {MainLayout} from "../components/MainLayout";
import {Header} from "../components/Header";
import styled from "@emotion/styled";
import {useContext, useEffect, useState} from "react"
import SettingsContext from "../components/context/SettingsContext";
import {words} from "../public/words";
import Image from 'next/image'

type WrapperProps = {
	startDistance: string
}

const Wrapper = styled.div<WrapperProps>`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 70px;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 60px;
	color: #371548;
	column-gap: ${(props) => +props.startDistance}px;
`
const ImageContainer = styled.div`
	text-align: center;
`
const Span = styled.span`
	font-size: 64px;
	color: #2B3172;
`

const Game = () => {

	const {state} = useContext(SettingsContext)

	const [localState, setlocalState] = useState({
		word: '',
		count: 0,
		distance: +state.distance
	})
	//words filtering
	const filteredWords = words.filter(word => word.length <= state.lettersCount)

	//words splitting
	const wordCenterIndex = Math.round(localState.word.length / 2)
	const firstPart = localState.word.substring(0, wordCenterIndex)
	const secondPart = localState.word.substring(wordCenterIndex)
	const splitedWord = [firstPart, secondPart]

	useEffect(() => {
		if (localState.count <= state.wordsCount) {
			setTimeout(() => {
				const randomWord = filteredWords[Math.floor(Math.random() * filteredWords.length)]
				setlocalState({
					...localState, word: randomWord,
					count: localState.count + 1,
					distance: +state.increaseDistance + localState.distance
				})
			}, state.velocity * 1000)
			clearTimeout()
		}
	}, [localState.count])

	return (
		<MainLayout>
			<Header/>
			<Wrapper startDistance={`${localState.distance}`}>
				{localState.count <= state.wordsCount ?
					<>
					<span>{splitedWord[0]}</span>
					<svg width="88" height="38" viewBox="0 0 88 38" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M88 2.99787C88 13.5849 85.5533 22.0654 80.66 28.4392C75.8199 34.8131 69.3841 38 61.3527 38C57.3636 38 53.7468 37.2168 50.5023 35.6503C47.311 34.0839 43.6676 31.2751 39.5721 27.2239C35.5298 23.1187 31.78 21.0661 28.3228 21.0661C25.6633 21.0661 23.4294 22.3895 21.621 25.0362C19.8658 27.683 18.9882 30.978 18.9882 34.9211L0 34.597C0 24.01 2.36688 15.6105 7.10063 9.39872C11.8876 3.13291 18.35 0 26.4878 0C30.5301 0 34.2267 0.810235 37.5775 2.4307C40.9284 3.99716 44.5718 6.80597 48.5077 10.8571C52.4968 14.8543 56.1668 16.8529 59.5177 16.8529C62.2303 16.8529 64.4376 15.5295 66.1396 12.8827C67.8948 10.1819 68.7724 6.85999 68.7724 2.91684L88 2.99787Z"
							fill="#371548"/>
					</svg>
					<span>{splitedWord[1]}</span>
					</>
				: <div>
						<ImageContainer><Image src="/image.png" alt="image"  width="464" height="532"/></ImageContainer>
						<Span>Отличная работа!</Span>
				</div>
				}
			</Wrapper>
		</MainLayout>
	)
}

export default Game