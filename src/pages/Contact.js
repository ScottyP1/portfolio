import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button } from '@chakra-ui/react';

export default function Contact() {
    return (
        <div className='text-white'>
            <h1 className="text-center tracking-[25px] text-xl md:text-2xl">CONTACT</h1>
            <div className='mt-6 flex justify-center'>
                <FormControl className='border border-solid border-white rounded-xl p-4 w-full max-w-md' isRequired>
                    <FormLabel className='mt-4'>Name</FormLabel>
                    <Input type='text' width='100%' />

                    <FormLabel className='mt-4'>Subject</FormLabel>
                    <Input type='text' width='100%' />

                    <FormLabel className='mt-4'>Message</FormLabel>
                    <Input type='text' width='100%' />
                    <Button className='mt-4 w-full' backgroundColor='#7805fc' color='white'>Send</Button>
                </FormControl>
            </div>
            <h2 className='mt-4 text-center'>Please Call, Email or fill out the form and ill get back with you shortly.</h2>

        </div>
    );
}
