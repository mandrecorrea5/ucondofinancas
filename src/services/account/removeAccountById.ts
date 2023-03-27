import AsyncStorage from "@react-native-async-storage/async-storage";

import { ACCOUNT_COLLECTION } from "@storage/config";
import { getAllAccounts } from "./getAllAccounts";

export const removeAccountById = async (idAccountDeleted: string) => {
    try {        
        const storageAccounts = await getAllAccounts();

        const accounts = storageAccounts.filter((account) => account.id !== idAccountDeleted);
                      
        await AsyncStorage.setItem(ACCOUNT_COLLECTION, JSON.stringify(accounts));
    } catch (error) {
        throw error;
    }     
}