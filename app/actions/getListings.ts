import prisma from "@/libs/prismadb";
import { Listing } from "@/types/interfaces";

export default async function getListings() {
    try {
        const listings = await prisma.listing.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return listings
    } catch (error: any) {
        throw new Error(error)
    }
}

