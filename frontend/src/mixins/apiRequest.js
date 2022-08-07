export default {
    methods: {
        async fetchUsers(options) {
            const response = await fetch("https://randomuser.me/api/?seed=vctrade" + options);
            if (
                response?.headers?.get("Content-Type")?.indexOf("application/json") >= 0
            ) {
                if (response.ok) {
                    return await response.json();
                } else {
                    const errorJson = await response.json();
                    throw new Error(errorJson.message);
                }
            } else {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
            }
        },
    }
}