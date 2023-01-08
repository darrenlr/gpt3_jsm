import React from "react";

import {
	Footer,
	Blog,
	Possibility,
	Features,
	WhatGTP3,
	Header,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";

const App = () => {
	return (
		<div className="App">
			<div className="gradients__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGTP3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;
