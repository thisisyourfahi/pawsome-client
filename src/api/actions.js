'use server'

import { revalidatePath } from "next/cache"

export async function RefreshPath(path) {
    console.log('revalidating path:', path)
    revalidatePath(`${path}`)
}