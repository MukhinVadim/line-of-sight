import styled from '@emotion/styled'

const Wrapper = styled.div`
	position: relative;
	max-width: 1976.31px;
	height: 1497.67px;
	width: 100%;
	margin: 0 auto;
	background: #F6F9FF;
`

export const MainLayout = ({children}) => {
	return (
		<Wrapper>
			{children}
		</Wrapper>
	)
}