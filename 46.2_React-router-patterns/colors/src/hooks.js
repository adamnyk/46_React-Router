import { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultValue=[]) => {
    if (localStorage.getItem(key)) {
		try {
			defaultValue = JSON.parse(localStorage.getItem(key));
		} catch (error) {
			console.log(error);
		}
	}

	const [state, setState] = useState(defaultValue);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
}

export default useLocalStorageState