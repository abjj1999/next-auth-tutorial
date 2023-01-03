import React from 'react'
import { getSession, useSession } from 'next-auth/react'
const Protected = () => {
    const {data: session, status} = useSession()

    if(status === "unauthenticated"){
        return <h1>unauthenticated</h1>
    }else {
        return <h1>authenticated</h1>
    }
  
}


export async function getServerSideProps(context) {
    const session = await getSession(context)

    if(!session){
        return {
            redirect: {
                destination: "/auth/signin",
                permanent: false
            }
        }
    }

    return {
        props: {session}
    }
}

export default Protected
