import { Metadata } from "next";

type Props = {
	params: {slug: string}
}

export async function generateMetadata({ params}: Props): Promise<Metadata> {
	const title = params.slug.replace(/-/g, ' ').toUpperCase();
	return {
		title: `${title} | Blog`,
		description: `Post sobre ${title}`
	}
}

export default function BlogPage() {
  return (
	<div>
	  <h1>Hello Blog Page</h1>
	</div>
  );
}