

export interface CreateUserRequest {
    username: string;
    age: number;
    user_type: boolean;
}




export interface CreateUserResponse {
    user_id: number;
    username: string;
}