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

// get all adoption request made by a user
export const getAllRequestsOfAUser = async (userId) => {
    const data = await fetch(`${PUBLIC_URL}/dashboard/my-requests/${userId}`)
    const res = await data.json();
    return res;
}
