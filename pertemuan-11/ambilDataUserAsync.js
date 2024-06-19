async function ambilDataUserAsync() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        const users = await response.json();
        console.log(users.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

}
export default ambilDataUserAsync;
