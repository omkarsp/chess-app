export type LoginResponse = {
    token: string;
    expiration: string;
    message?: string; // Optional message for success or error
}
