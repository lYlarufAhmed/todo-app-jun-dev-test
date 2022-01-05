export const loadUser = async () => {
    return await fetch("https://swapi.dev/api/people/1").then(res => res.json()).then(({name, birth_year}) => ({
        name,
        birth_year
    }))
}