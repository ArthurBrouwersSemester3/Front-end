export function fetchData() {
    return fetch('https://api.example.com/data')
        .then(response => response.json())
        .catch(error => console.error(error));
}
