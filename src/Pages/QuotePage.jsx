import React from "react";
import { QuotePageState } from "./State/QuotePageState";
import QuoteExtensionPage from "./Components/QuoteExtensionPage";

const QuotePage = () => {
	return (
		<QuotePageState>
			<QuoteExtensionPage />
		</QuotePageState>
	);
};

export default QuotePage;
