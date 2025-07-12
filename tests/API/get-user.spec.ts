import {test, request, expect} from '@playwright/test';
import { getTestUserId } from '../../Factories/API/get-user-id';
import { UserResponse } from '../../Interfaces/API/user.interface';

test.describe('API checks', () => { 
test(' should return valid user data', async ({request}) => {

    const userId = getTestUserId();

    const response = await request.get('/users?id=${userID}');
    expect(response.status()).toBe(200);

    const body = await response.json() as UserResponse;

    //check structure
    expect(typeof body.user_id).toBe('number');
    expect(typeof body.user_name).toBe('string');
    expect(typeof body.age).toBe('number');

    expect(body.user_id).toBe(userId);
    expect(body.age).toBeGreaterThanOrEqual(0);
    expect(body.age).toBeLessThanOrEqual(100);


})
})
