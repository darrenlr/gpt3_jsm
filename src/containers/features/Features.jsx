import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
	{
		title: "Improving and distrusts instantly",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		title: "Become the tended active",
		text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		title: "Message or am nothing",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		title: "Really boy law contry",
		text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
];

const Features = () => {
	return (
		<div className="gpt3__features section__padding" id="features">
			<div className="gpt3__features-heading">
				<h1 className="gradient__text">
					The Future is Now and You Just Need to Realise It. Step into the
					Future Today & Help Make It Happen.
				</h1>
				<p>Request early access.</p>
			</div>
			<div className="gtp3__feature-container">
				{featuresData.map((item, index) => (
					<Feature
						title={item.title}
						text={item.text}
						key={item.title + index}
					/>
				))}
			</div>
		</div>
	);
};

export default Features;
