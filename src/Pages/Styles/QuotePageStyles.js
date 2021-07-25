import styled from "styled-components";
const ImageBackground = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	background-image: url(${(props) => props.imageUrl});
	background-position: center;
	background-size: cover;
`;

const QuoteTextConatiner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.5);
	color: whitesmoke;
	width: 40%;
	min-width: 300px;
	height: auto;
	min-height: 20vh;
	font-size: 2vw;
	padding: 4vh;
	border-radius: 5vh;
	font-family: "Rosario", sans-serif;
	font-size: 4vh;
	font-style: italic;
	font-weight: 400;
	letter-spacing: normal;
	text-transform: none;
	color: #ffffff;
	letter-spacing: 1px;
`;
const RowConatiner = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: 100%;
`;

const AuthorName = styled(RowConatiner)`
	height: 100%;
	letter-spacing: normal;
	text-transform: none;
	color: rgba(255, 255, 255, 0.9);
	letter-spacing: 1px;
	margin-top: -8vh;
	font-size: max(2.5vw, 14px);

	font-family: "Dancing Script", cursive;
	font-weight: 700;
`;

const QuotationRight = styled(RowConatiner)`
	justify-content: flex-end;
	font-size: 10vh;
	margin: 0;
	padding: 0;
	height: auto;
`;
const QuotationLeft = styled(RowConatiner)`
	justify-content: flex-start;
	font-size: 10vh;
	margin: 0;
	padding: 0;
	height: 5vh;
`;

const RandomButton = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 10%;
	min-width: 200px;
	height: 5vh;
	color: white;
	outline: none;
	margin-top: 3vh;
	border-radius: 2vw;
	background: rgba(0, 0, 0, 0.5);
	border: 2px solid white;
	padding: 1rem;
	font-family: "Rosario", sans-serif;
	font-size: 2.4vh;
	font-style: normal;
`;

const GradientBackground = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: radial-gradient(
		229.61% 263.36% at 65.63% -46.89%,
		#391467 27.48%,
		#5b2210 64.52%,
		rgba(2, 57, 54, 0.44) 97.85%
	);
`;

export {
	ImageBackground,
	QuotationLeft,
	QuotationRight,
	AuthorName,
	QuoteTextConatiner,
	RandomButton,
	GradientBackground,
};
