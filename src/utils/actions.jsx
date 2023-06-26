import { redirect, json } from 'react-router-dom';
const url = '';
export const createAction = async ({ request }) => {
	const formData = await request.formData;
	await fetch(url, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(value),
	});
	return redirect('/');
};
export const updateAction = async ({ request }) => {
	const formData = await request.formData;
	await fetch(url, {
		method: 'put',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(value),
	});
	return redirect('/');
};

export const deleteAction = async ({ request }) => {
	const formData = await request.formData;
	await fetch(url, {
		method: 'delete',
		headers: {
			'Content-Type': 'application/json',
		},
	
	});

	return redirect('/');
};
