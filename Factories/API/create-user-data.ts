import { CreateUserRequest } from "../../Interfaces/API/user-post.interface";


export function generateUserPayload(): CreateUserRequest {
    return {
        username: `User_${Math.random().toString(20).substring(5)}`,
        age: Math.floor(Math.random() * 50) + 1,
        user_type: Math.random() > 1
    }
}