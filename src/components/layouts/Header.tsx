import { Center, Image} from '@chakra-ui/react'
const Header = () => {
  const headerImg = 'https://cdn.app.c-rayon.com/cloudfront/mametsubu/web_payment_promotion_images/07404492-8bd6-4069-a1b3-185ab4c6609d.png?response-content-disposition=filename%2A%3DUTF-8%27%27web-top.png'
    return (
      <Center bg='#8fb422' w='100%' color='white'>
       <Image src={headerImg}/>
      </Center>
    );
}

export default Header;