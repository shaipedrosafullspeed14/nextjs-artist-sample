import { signIn } from '@/services/authService';
import React, { FormEvent, useState } from 'react';
import { FormControl, FormLabel, Input, Button, InputGroup, InputRightElement, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { useRouter } from 'next/router';
const signInPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleShowPassword = () => setShowPassword(!showPassword)

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const user = await signIn(email,password);
        router.push('/userInfo')
    } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
    }
  };
  return ( 
    <form onSubmit={handleSignIn}>
      <FormControl w='500px' m={3}>
        <FormLabel>Email address</FormLabel>
        <Input type='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email address'
        />
      </FormControl>
      <FormControl w='500px' m={3}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
            <Input
            pr='4.5rem'
            value={password}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}                
            placeholder='Enter your password'
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
                {showPassword ? 'Hide' : 'Show'}
                </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl w='500px' m={3}>
        {error && <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
          </Alert>
        }
      </FormControl>
      <Button
        bg='#8fb422' 
        color='#fff' 
        size='md' 
        fontSize='15px' 
        m={3}
        type='submit'>
        Sign In
      </Button>
    </form>
  );
};
export default signInPage;