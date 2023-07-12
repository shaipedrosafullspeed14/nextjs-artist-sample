import { Grid, GridItem, Center, Image, VStack, Container, SimpleGrid, Box, Text, Button, Divider} from '@chakra-ui/react'
import { useRouter } from 'next/router';
const HomePage = () => {
  const router = useRouter();
  const imageContent_1 = 'https://cdn.app.c-rayon.com/cloudfront/mametsubu/web_payment_promotion_images/61b6e75b-a118-4cf4-81cc-9b05c272109e.png?response-content-disposition=filename%2A%3DUTF-8%27%27web-screenshot-pc.png'
  const imageContent_2 = 'https://cdn.app.c-rayon.com/cloudfront/mametsubu/web_payment_promotion_images/ac518531-44ad-46c3-af6b-907b53ccba0a.png?response-content-disposition=filename%2A%3DUTF-8%27%27web-premiuminfo-pc.png'  
  const goToSignIn = () => {
    router.push('/auth/signin')
  }
  return (
    <VStack bg='#f7f7f7'>
        <Container className='containerContentInfo' maxW='70%' h='200px' bg='#fff' p='10'>
            <Center bg='#ffff'>
                <SimpleGrid columns={2} gap={10}>
                    <Box maxW='350px' height='100px' p='5'>
                        <VStack>
                            <Text as='b'>Click here if you have not yet created a member account for both the app and the website.</Text>
                            <Button bg='#8fb422' color='#fff' w='300px' fontSize='15px' mt='3'>Mamezutsu (paid member) registration</Button>
                        </VStack>
                    </Box>
                    <Box maxW='350px' height='100px' p='5'>
                        <VStack>
                            <Text as='b'>Click here if you have already created a member account(accounts are common to the app and web)</Text>
                            <Button bg='#fff' color='#8fb422' borderColor='#8fb422' border='2px' w='300px' fontSize='15px' mt='3' onClick={goToSignIn}>Sign in</Button>
                        </VStack>
                    </Box>
                </SimpleGrid>
            </Center>
        </Container>
        <Center bg='#f7f7f7' w='100%' color='white' m='20'>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <GridItem bg='#f7f7f7'>
                <Image boxSize='375px' h='732px' src={imageContent_1}/>
            </GridItem>
            <GridItem bg='#f7f7f7'>
                <Image boxSize='375px' h='654px' src={imageContent_2}/>
            </GridItem>
        </Grid>
        </Center>
    </VStack>
    );
}

export default HomePage;