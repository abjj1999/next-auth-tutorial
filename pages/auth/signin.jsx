import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Grid, Heading, VStack, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, chakra } from '@chakra-ui/react'
import { useSession, signIn, signOut } from 'next-auth/react'
import {BsGithub, BsGoogle, BsTwitter} from 'react-icons/bs'

const providers = [
    {
        name: 'google',
        Icon: BsGoogle,
    },
    {
        name: 'github',
        Icon: BsGithub,
    },
    {
        name: 'twitter',
        Icon: BsTwitter,
    }
]


const SignIn = () => {
    const { data: session, status } = useSession()
    const [email, setEmail] = useState('');
    const router = useRouter()
    if(status === 'loading') return <Heading>loading...</Heading>
    console.log(session)
    if(session) {
        setTimeout(() => {
            router.push('/')
        }, 5000)
        return <Heading>You are already signed In</Heading>
               
            
        
    }

    const handleAuthSignIn = (provider) => () => signIn(provider)

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        if(!email) return;
        signIn('email', {email, redirect: false})
     }
  return (
    <Box>
        {/* <chakra.form onSubmit={handleSubmit}>
            <FormLabel>Email</FormLabel>
            <Input type="email" onChange={e => setEmail(e.target.value)} />
            <Button type='submit' w='100%' my={5} >Sign In</Button>
        </chakra.form> */}
        <VStack>
            {providers.map(({name, Icon}) => (
                <Button key={name} onClick={handleAuthSignIn(name)} leftIcon={<Icon />}
                    textTransform="uppercase" w="100%"
                >
                    Sign in with {name}
                </Button>
            ))}
        </VStack>
    </Box>
  )
}

export default SignIn
