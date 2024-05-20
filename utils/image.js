export async function toBytesArray(imageUrl) {
	if (imageUrl.startsWith('http')) {
		const blob = await fetch(imageUrl).then((response) => response.arrayBuffer());
		return new Uint8Array(blob);
	} else if (imageUrl.startsWith('data:image')) {
		const base64 = imageUrl.split(',')[1];
		const binaryString = atob(base64);
		const bytes = new Uint8Array(binaryString.length);
		for (let i = 0; i < binaryString.length; i++) {
			bytes[i] = binaryString.charCodeAt(i);
		}
		return bytes;
	} else {
		throw new Error('Invalid image URL');
	}
}
