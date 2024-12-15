import { Client, Databases, Account } from "node-appwrite";

type AdminClient = {
    account: Account;
    databases: Databases;
};

const createAdminClient = async (): Promise<AdminClient> => {
    const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;
    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    // Validate environment variables
    if (!endpoint || !projectId || !apiKey) {
        throw new Error("Appwrite configuration is missing in environment variables.");
    }

    const client = new Client()
        .setEndpoint(endpoint)
        .setProject(projectId)
        .setKey(apiKey);

    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        },
    };
};

export { createAdminClient };
