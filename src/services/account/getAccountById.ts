import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAllAccounts } from "./getAllAccounts";

export const getAccountById = async (id: string) => {
    try {        
        const storageAccounts = await getAllAccounts();

        const account = storageAccounts.find((account) => account.id === id);

        return account;
    } catch (error) {
        throw error;
    }     
}