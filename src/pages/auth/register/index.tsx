import { signUp } from '@/services/authService';
import React, { FormEvent, useState } from 'react';
import { FormControl, FormLabel, Input, Button, InputGroup, InputRightElement, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { useRouter } from 'next/router';
const registerPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleShowPassword = () => setShowPassword(!showPassword)
  const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        if (password === confirmPassword) {
            const user = await signUp(email,password);
            router.push('/userInfo')
        } else {
            setError('Password did not match');
        }
    } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
    }
  };
  return ( 
    <form onSubmit={handleSignUp}>
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
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
            <Input
            pr='4.5rem'
            value={confirmPassword}
            type={showConfirmPassword ? 'text' : 'password'}
            onChange={(e) => setConfirmPassword(e.target.value)}                
            placeholder='Confirm your password'
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleShowConfirmPassword}>
                {showConfirmPassword ? 'Hide' : 'Show'}
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
        Sign Up
      </Button>
    </form>
  );
};
export default registerPage;