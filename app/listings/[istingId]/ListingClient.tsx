'use client'

import { useParams, usePathname } from "next/navigation";

let params: any = ''

const ListingClient = () => {

 params = usePathname()

    console.log(params);
    

    return <div>ListingClient</div>;
};

export { params
}
export default ListingClient;
