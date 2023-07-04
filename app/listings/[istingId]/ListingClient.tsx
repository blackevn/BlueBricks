'use client'

import { useParams, usePathname } from "next/navigation";

let params: any = null

const ListingClient = () => {

 params = usePathname()

    console.log();
    

    return <div>ListingClient</div>;
};

export { params
}
export default ListingClient;
