import {test, expect, request} from '@playwright/test'
import { generateUserPayload } from '../../Factories/API/create-user-data'
import { CreateUserRequest, CreateUserResponse } from '../../Interfaces/API/user-post.interface'


test('create user and chek correct response data', async ({request}) => {

    const paylaod: CreateUserRequest = generateUserPayload();

    const response = await request.post('/user',{
        data: paylaod
    });

    expect(response.status()).toBe(200);

    const body: CreateUserResponse = await response.json();

    expect(typeof body.user_id).toBe('number');
    expect(typeof body.username).toBe('string');
    

})