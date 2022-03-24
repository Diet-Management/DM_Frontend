export default new class member {
    signup(email: string, name: string, password: string, theme: string) {
        try {
            const data = {
                email: email,
                name: name,
                password: password,
                theme: theme,
            };
        } catch (e:any) {
            console.log(e);
            throw new Error(e);
        }
    }
}