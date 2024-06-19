function ambilDataUser() {
    fetch('https://reqres.in/api/users');
        .then(response => {
            return response.json();
        })
        .then(user => {
            console.log(user.data)
        })
        .catch(error => {
            console.error("Error Fetching data", error);
        });
}
export default ambilDataUser;


