import Image from "next/image";
import logo from "../public/logo.png";
import styled from "@emotion/styled";

const ImageContainer = styled.div`
	display: flex;
	flex-direction:row-reverse;
	flex-wrap: wrap;
	column-gap: 214px;
	padding-top: 86px;
	padding-right: 54.56px;
	text-align: right;
`

export const Header = ({children}: any) => {
	return (
		<ImageContainer>
			<Image
				src={logo}
				alt="Logo"
				width={337.75}
				height={134.71}
			/>
			{children}
		</ImageContainer>
	)
}



