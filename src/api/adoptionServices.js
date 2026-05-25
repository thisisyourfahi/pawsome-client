const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:5555'

// add adoption info
export const addAdoption = async (adoptionInfo) => {
    const data = await fetch(`${PUBLIC_URL}/add-adoption`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adoptionInfo)
    })
    const res = await data.json();
    if (res.acknowledged) {
        return ({ ok: true })
    } else {
        return ({ ok: false })
    }
}

// accept adoption request 
export const acceptAdoptionRequest = async (adoptionId) => {
    const data = await fetch(`${PUBLIC_URL}/dashboard/adoption-requests/accept/${adoptionId}`, {
        method: 'PATCH',
    });
    const res = await data.json();
    if (res.acknowledged) {
        return ({ ok: true })
    } else {
        return ({ ok: false })
    }
}

// get all adoption requests of a users list
export const getAddoptionRequestOfYourListings = async (userId) => {
    const data = await fetch(`${PUBLIC_URL}/dashboard/adoption-requests/${userId}`);
    const res = await data.json();
    return res;
}

// get all adoption request made by a user
export const getAllRequestsOfAUser = async (userId) => {
    const data = await fetch(`${PUBLIC_URL}/dashboard/my-requests/${userId}`)
    const res = await data.json();
    return res;
}

// delete an adoption request
export const deleteAnAdoption = async (adoptionId) => {
    console.log('user wants to delete adoption:', adoptionId)
    const data = await fetch(`${PUBLIC_URL}/dashboard/my-requests/delete/${adoptionId}`, {
        method: 'DELETE'
    })
    const res = await data.json();
    if (res.acknowledged) {
        return ({ ok: true })
    }
    return ({ ok: false })
}
