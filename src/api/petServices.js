const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:5555'

export const addPet = async (petInfo) => {
    const data = await fetch(`${PUBLIC_URL}/add-pet`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(petInfo)
    })
    const res = await data.json();
    if (res.acknowledged) {
        return {ok: true}
    } else {
        return {ok: false}
    }
} 

export const getAllPets = async () => {
    const data = await fetch(`${PUBLIC_URL}/all-pets`);
    const res = await data.json();
    return res;
}

export const getASinglePet = async (id) => {
    const data = await fetch(`${PUBLIC_URL}/all-pets/${id}`);
    const res = await data.json();
    return res;
}