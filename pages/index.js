import { Heading, Button } from "@chakra-ui/react"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { Grid } from "@chakra-ui/react"
export default function Home() {
  const { data: session, status } = useSession()
  console.log(session)
  const router = useRouter()
  const handleSignOut = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: "/some"
    })

    router.push(data.url)
  }

  const handleSignIn = async () => {
    router.push(`/auth/signin?callbackUrl=${router.asPath}`)

  }

 

  return (
    <Grid placeItems="center" gridRowGap='1rem' >
    {
      session ? (
        <>
        <Heading>signed in as {session.user.email}</Heading>
        <Button onClick={handleSignOut}>Sign out</Button>
        </>

      ): (
        <>
        <Heading>you are not logged in</Heading>
        <Button onClick={handleSignIn}>Sign in</Button>
        </>
      )
    }
    </Grid>
  )
}
