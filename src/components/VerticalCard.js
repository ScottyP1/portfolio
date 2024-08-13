import { Link } from "react-router-dom";
import { Card, CardBody, Image, Stack, Heading, Text, Button, Box } from '@chakra-ui/react';

export default function VerticalCard({ link = '#', title, description, image, imageAlt }) {
    return (
        <Card
            maxW='sm'
            className='mb-6 md:mb-0 me-0 md:me-4'
            backgroundColor='transparent'
            borderColor='#7805fc'
            borderWidth='1px'
            color='white'
            display='flex'
            flexDirection='column'
        >
            <CardBody p={0} display='flex' flexDirection='column' flex='1'>
                <Image
                    src={image}
                    alt={imageAlt}
                    className="h-[200px]"
                />
                <Stack p={6} spacing='3' flex='1'>
                    <Heading size='md'>{title}</Heading>
                    <Text className="text-sm" flex='1'>
                        {description}
                    </Text>
                    <Box mt='auto'>
                        <Button
                            as={Link}
                            to={link}
                            variant='solid'
                            backgroundColor='#7805fc'
                            className='me-2 w-full'
                            color='white'
                            _hover={{ backgroundColor: '#6604d5' }}
                        >
                            Visit
                        </Button>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}
