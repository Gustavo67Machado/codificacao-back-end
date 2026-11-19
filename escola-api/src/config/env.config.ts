export interface variaveisAmbiente {
    NODE_ENV: 'desenvolvimento' | 'preoducao' | 'teste';
    PORT: number;
    MONGO_URI: string;
    JWT_SECRET: string;
}