import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";

export default function HorizontalCard() {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            bg='rgba(255, 255, 255, 0.1)'
            border='1px'
            borderColor='rgba(0, 0, 0, 0.8)'
            mx='auto'
            className='w-[100%] md:w-[50%]'
        >
            <Stack className='text-white'>
                <CardBody>
                    <Heading size='md'>Hello, I'm Cody Scott</Heading>
                    <Text py='2'>
                        As a dedicated and self-taught web developer, I bring a passion for crafting dynamic and innovative web solutions. With a strong foundation in modern web technologies, I am committed to creating high-quality applications that offer exceptional user experiences.
                    </Text>
                </CardBody>

                <CardFooter className='place-content-center'>
                    <Button variant='solid' backgroundColor='#7805fc' className='me-2' color='white' _hover={{ backgroundColor: '#6604d5 ' }}>
                        <Link to='projects'>Projects</Link>
                    </Button>
                    <Button variant='outline' borderColor='#7805fc' color='white' _hover={{ backgroundColor: '#6604d5 ' }}>
                        <Link to='contact'>Contact</Link>
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
}
