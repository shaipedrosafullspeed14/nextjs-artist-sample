import { Flex, Spacer, Box, Image, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { checkUserAuth, logout } from '@/services/authService';
const Navbar = () => {
  const router = useRouter();
  const logo = 'https://cdn.app.c-rayon.com/cloudfront/mametsubu/web_payment_promotion_images/a9333648-177d-48a1-a804-a15ba7517a9f.png?response-content-disposition=filename%2A%3DUTF-8%27%27manager-logo.png'
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  useEffect(() => {
   setIsAuthenticated(checkUserAuth())
  }, []);

  const goToSignIn = async () => {
    try {
      if (isAuthenticated) {
        await logout();
      } 
      router.push('/auth/signin')
    } catch (error) {
        if (error instanceof Error) {
          console.log(error)
        }
    }
  };

    return (
      <Flex boxShadow='dark-lg' minWidth='max-content' alignItems='center' p='1' gap='2'>
      <Box p='2'>
        <Image src={logo} h="40px" />
      </Box>
      <Spacer />
      <Button bg='#8fb422' color='#fff' size='md' fontSize='15px' mr='3' onClick={goToSignIn}>{isAuthenticated ? 'Sign Out' : 'Sign In'}</Button>
    </Flex>
  );
}   

export default Navbar;