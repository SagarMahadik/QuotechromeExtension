import React, { useEffect, useState } from "react";
import {
	useQuotePageDispatch,
	useQuotePageState,
} from "../State/QuotePageState";
import { generateRandomInteger } from "../../utils/generateRandomInteger";
import {
	ImageBackground,
	QuotationLeft,
	QuotationRight,
	AuthorName,
	QuoteTextConatiner,
	RandomButton,
	GradientBackground,
} from "../Styles/QuotePageStyles";
import { motion, AnimatePresence } from "framer-motion";

const QuotePage = () => {
	const { quotes, backgroundImage, getImages, backgroundImages, displayQuote } =
		useQuotePageState();

	const dispatch = useQuotePageDispatch();

	console.log(quotes);
	console.log(backgroundImages);

	const [randomQuote, setRandomQuote] = useState(1);
	const [randomBackgroundImage, setRandomBackgroundImage] = useState(1);

	useEffect(() => {
		if (quotes.length > 0) {
			setRandomQuote(generateRandomInteger(1, quotes.length - 1));
		}
	}, [quotes]);

	useEffect(() => {
		if (backgroundImages.length > 0) {
			setRandomBackgroundImage(
				generateRandomInteger(1, backgroundImages.length - 1)
			);
		}
	}, [backgroundImages]);

	if (quotes.length === 0) {
		return <h1>Loading...</h1>;
	}
	return (
		<GradientBackground>
			<ImageBackground
				imageUrl={backgroundImages[randomBackgroundImage].backgroundImageUrl}
			>
				<QuoteTextConatiner>
					<AnimatePresence>
						{displayQuote && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.7 }}
								exit={{ opacity: 0 }}
							>
								<QuotationLeft>&#8220;</QuotationLeft>
								<div style={{ padding: "1rem" }}>
									{quotes[randomQuote].quote}
								</div>
								<QuotationRight>&#8221;</QuotationRight>
								<AuthorName>{quotes[randomQuote].author.authorName}</AuthorName>
							</motion.div>
						)}
					</AnimatePresence>
				</QuoteTextConatiner>
				<RandomButton
					onClick={() => {
						dispatch({ type: "SET_HIDEQUOTE" });
						setTimeout(() => {
							dispatch({ type: "SET_SHOWQUOTE" });
							setRandomQuote(generateRandomInteger(1, quotes.length - 1));
						}, 700);
					}}
				>
					Random
				</RandomButton>
			</ImageBackground>
		</GradientBackground>
	);
};

export default QuotePage;
