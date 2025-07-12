import {faker} from '@faker-js/faker';

export function generateValidCredentials(){
    return {
        email: faker.internet.email(),
        password: faker.internet.password({length: 10, memorable: true, pattern: /[A-Z]/, prefix:'1'}),
    };
}