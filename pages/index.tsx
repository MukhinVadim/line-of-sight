import {MainLayout} from "../components/MainLayout";
import Head from "next/head"
import Link from "next/link"
import styled from "@emotion/styled";
import {Header} from "../components/Header";
import {SettingVelocityBlock} from "../components/SettingBlocks/SettingVelocityBlock";
import {Distance} from "../components/SettingBlocks/Distance";
import {WordsCount} from "../components/SettingBlocks/WordsCount";
import {LettersCount} from "../components/SettingBlocks/LettersCount";
import {IncreaseDistance} from "../components/SettingBlocks/IncreaseDistance";


const MainTitle = styled.div`
	display: flex;
	justify-content:center;
	align-items:center;
	font-size: 64px;
	color: #2B3172;
`

const SettingsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 38.12px;
	row-gap: 38.12px;
  justify-content: center;
  margin-top: 149.29px;
`

const ItemContainer = styled.div`
	display: flex;
  align-items: center;
	justify-content: center;
	width: 708.31px;
	height: 220.5px;	
`

const StartBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 389.11px;
	height: 109.53px;
	background: #FDD207;
	border-radius: 81.5275px;
	/*text*/
	color: #371548;
	font-size: 48.92px;
	cursor: pointer;
`


const Index: React.FC = () => {

	return (
		<MainLayout>
			<Head>
				<title>Поле зрения</title>
			</Head>
			<Header>
				<MainTitle>Тренажер «Поле зрения»</MainTitle>
			</Header>
			<SettingsWrapper>
				<ItemContainer>
					<WordsCount/>
				</ItemContainer>
				<ItemContainer>
					<Distance/>
				</ItemContainer>
				<ItemContainer>
					<LettersCount/>
				</ItemContainer>
				<ItemContainer>
					<IncreaseDistance/>
				</ItemContainer>
				<ItemContainer>
					<SettingVelocityBlock/>
				</ItemContainer>
				<ItemContainer>
					<Link href="game"><StartBtn>СТАРТ</StartBtn></Link>
				</ItemContainer>
			</SettingsWrapper>
		</MainLayout>
	)
}

export default Index