const PUBLIC_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5555'

export const getAUser = async (userId) => {
    const data = await fetch(`${PUBLIC_URL}/user/${userId}`);
    const res = await data.json();
    return res;
}