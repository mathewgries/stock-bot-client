export const post = async (data) => {
    return await fetch('http://localhost:3001/chartdata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error('ERROR IN POST: ', err.message))
}