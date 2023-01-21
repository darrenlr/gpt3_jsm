import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { Article } from "../../components";

const Blog = () => {
	return (
		<div className="gpt3__blog section__padding" id="blog">
			<div className="gpt3__blog-heading">
				<h1 className="gradient__text">
					A lot is happening, and we're blogging about it!
				</h1>
			</div>
			<div className="gpt3__blog-container">
				<div className="gpt3__blog-container_groupA">
					<Article
						imgUrl={blog01}
						date="Jan 19, 2023"
						title="GPT-3 and OpenAI is the future. Let us explore it together."
					/>
				</div>
				<div className="gpt3__blog-container_groupB">
					<Article
						imgUrl={blog02}
						date="Jan 19, 2023"
						title="GPT-3 and OpenAI is the future. Let us explore it together."
					/>
					<Article
						imgUrl={blog03}
						date="Jan 19, 2023"
						title="GPT-3 and OpenAI is the future. Let us explore it together."
					/>
					<Article
						imgUrl={blog04}
						date="Jan 19, 2023"
						title="GPT-3 and OpenAI is the future. Let us explore it together."
					/>
					<Article
						imgUrl={blog05}
						date="Jan 19, 2023"
						title="GPT-3 and OpenAI is the future. Let us explore it together."
					/>
				</div>
			</div>
		</div>
	);
};

export default Blog;
