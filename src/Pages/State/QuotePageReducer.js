import {
	SET_QUOTEDATA,
	SET_RANDOMINDEX,
	SET_BAKGROUNDIMAGE,
	SET_BACKGROUNDIMAGEARRAY,
	SET_SHOWQUOTE,
	SET_HIDEQUOTE,
} from "./types";
import { produce } from "immer";

export default (state, action) => {
	switch (action.type) {
		case SET_QUOTEDATA:
			return produce(state, (draftState) => {
				draftState.quotes = action.payload;
			});
		case SET_RANDOMINDEX:
			return produce(state, (draftState) => {
				draftState.randomIndex = action.payload;
			});

		case SET_BAKGROUNDIMAGE:
			return produce(state, (draftState) => {
				draftState.backgroundImage = action.payload;
			});

		case SET_BACKGROUNDIMAGEARRAY:
			return produce(state, (draftState) => {
				draftState.backgroundImages = action.payload;
			});

		case SET_HIDEQUOTE:
			return produce(state, (draftState) => {
				draftState.displayQuote = false;
			});
		case SET_SHOWQUOTE:
			return produce(state, (draftState) => {
				draftState.displayQuote = true;
			});
	}
};
