import { useState } from "react";

export default function useLocalStorageState<T>(initialState: T | null, key: string, isJSON: boolean = true) {
    const [state, setState] = useState<T | null>(
        (isJSON ? JSON.parse(localStorage.getItem(key) ?? 'null') : localStorage.getItem(key))
            ?? initialState
    );

    const onSetState = (newState: T | null) => {
        setState(newState);
        if (newState === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(newState));
        }
    }

    return [state, onSetState] as const;
}
