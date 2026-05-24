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
        return { ok: true }
    } else {
        return { ok: false }
    }
}

export const getAllPets = async () => {
    const data = await fetch(`${PUBLIC_URL}/all-pets`);
    const res = await data.json();
    return res;
}

export const getAllPetsOfAuser = async (userId) => {
    const data = await fetch(`${PUBLIC_URL}/dashboard/my-listings/${userId}`)
    const res = await data.json();
    return res;
}

export const getASinglePet = async (id) => {
    const data = await fetch(`${PUBLIC_URL}/all-pets/${id}`);
    const res = await data.json();
    return res;
}

// update a pet
export const updateAPet = async (petInfo, id) => {
    const data = await fetch(`${PUBLIC_URL}/update-pet/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(petInfo)
    })
    const res = await data.json();
    if (res.acknowledged) {
        return ({ok: true})
    } else {
        return ({ok: false})
    }
}

// delete a pet
export const deleteAPet = async (petId) => {
    console.log('user want to delete:', petId)
    const data = await fetch(`${PUBLIC_URL}/delete/${petId}`, {
        method: 'DELETE'
    })
    const res = await data.json();
    if (res.acknowledged) {
        return ({ok: true})
    } else {
        return ({ok: false})
    }
}