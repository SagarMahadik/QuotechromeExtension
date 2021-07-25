import React, { useReducer, useEffect, useContext } from "react";
import { QuotePageContext, QuotePageDispatchContext } from "./QuotePageContext";
import axios from "axios";
import QuotePageReducer from "./QuotePageReducer";

const QuotePageState = ({ children }) => {
	const initialState = {
		quotes: [],
		backgroundImages: [],
		randomIndex: 0,
		backgroundImage: "",
		displayQuote: true,
	};

	const [state, dispatch] = useReducer(QuotePageReducer, initialState);

	useEffect(() => {
		console.log("In useEffect");
		getQuotes();
	}, []);
	useEffect(() => {
		console.log("In useEffect");
		getImages();
	}, []);

	const getQuotes = async () => {
		const response = await axios.get(
			"https://quotenquote.herokuapp.com/api/v1/quote"
		);
		console.log(response);
		dispatch({
			type: "SET_QUOTEDATA",
			payload: response.data.data.data,
		});
	};

	const getImages = async () => {
		const response = await axios.get(
			"https://quotenquote.herokuapp.com/api/v1/images"
		);
		console.log(response);
		dispatch({
			type: "SET_BACKGROUNDIMAGEARRAY",
			payload: response.data.data.data,
		});
	};

	const {
		quotes,
		randomIndex,
		backgroundImage,
		backgroundImages,
		displayQuote,
	} = state;

	return (
		<QuotePageContext.Provider
			value={{
				quotes,
				randomIndex,
				backgroundImage,
				backgroundImages,
				displayQuote,
				getImages,
			}}
		>
			<QuotePageDispatchContext.Provider value={dispatch}>
				{children}
			</QuotePageDispatchContext.Provider>
		</QuotePageContext.Provider>
	);
};

function useQuotePageState() {
	const context = useContext(QuotePageContext);

	if (context === undefined) {
		throw new Error(
			"useQuotePageState must be used within a QuotePageContext Provider"
		);
	}
	return context;
}

function useQuotePageDispatch() {
	const context = useContext(QuotePageDispatchContext);
	if (context === undefined) {
		throw new Error(
			"useQuotePageDispatch must be used within a QuotePageContextDispatchProvider"
		);
	}
	return context;
}

export { QuotePageState, useQuotePageState, useQuotePageDispatch };
