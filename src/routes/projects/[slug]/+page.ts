import { items } from '@data/projects';

export async function load({ params }: { params: Record<string, string> }) {
	// Se items for um objeto, converta para array
	const itemsArray = Array.isArray(items) ? items : Object.values(items);
	const project = itemsArray.find((item) => {
		return item.slug === params.slug;
	});

	return { project };
}
