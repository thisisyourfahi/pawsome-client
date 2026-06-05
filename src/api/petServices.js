const PUBLIC_URL = process.env.NEXT_PUBLIC_SERVER_URL

export const addPet = async (petInfo) => {
    console.log(typeof petInfo, 'add pet:', petInfo);
    const data = await fetch(`${PUBLIC_URL}/add-pet`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(petInfo)
    })
    console.log(data);
    const res = await data.json();
    console.log(res);
    if (res.acknowledged) {
        return ({ ok: true })
    } else {
        return ({ ok: false })
    }
}

export const getAllPets = async () => {
    const data = await fetch(`${PUBLIC_URL}/all-pets`);
    const res = await data.json();
    return res;
}

export const getAllPetsOfAuser = async (userId, token) => {
    const data = await fetch(`${PUBLIC_URL}/dashboard/my-listings/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const res = await data.json();
    return res;
}

export const getASinglePet = async (id, token) => {
    const data = await fetch(`${PUBLIC_URL}/all-pets/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const res = await data.json();
    return res;
}

// update a pet
export const updateAPet = async (petInfo, id, token) => {
    try {
        const data = await fetch(`${PUBLIC_URL}/update-pet/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(petInfo)
        });

        const res = await data.json();

        console.log(res);

        if (res.modifiedCount > 0 || res.matchedCount > 0) {
            return { ok: true };
        }

        return { ok: false };

    } catch (error) {
        console.log(error);
        return { ok: false };
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
        return ({ ok: true })
    } else {
        return ({ ok: false })
    }
}