/**
 * EXAMPLE FETCH - METHOD: 'GET'
 * This is the method to create in the front end application
 * This calls the above get endpoint, and returns the db records
 * to the front end
 */
export const get = async () => {
    return await fetch(`http://localhost:3001/chartdata`,{
        method: 'GET',
        mode: 'cors'
    })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error('ERROR: ', err.message))
}