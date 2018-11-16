export default (
    () => {
        const st = window.localStorage || {};
        return {
            set: (key, object) => {
                st[key] = (typeof object) === 'string' ? object : JSON.stringify(object);
            },
            get: (key) => {
                if (!st[key]) {
                    return null;
                }
                const value = st[key];

                try {
                    const parsed = JSON.parse(value);
                    return parsed;
                } catch (e) {
                    return value;
                }
            },
            remove: (key) => {
                if (window.localStorage) {
                    return window.localStorage.removeItem(key);
                }
                delete st[key];
            }
        };
    }
)();