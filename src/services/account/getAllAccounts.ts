import AsyncStorage from "@react-native-async-storage/async-storage";

import { ACCOUNT_COLLECTION } from "@storage/config";
import { AccountDTO } from "@models/AccountDTO";

export const getAllAccounts = async () => {
    try {
        const storage = await AsyncStorage.getItem(ACCOUNT_COLLECTION);     

        const accounts: AccountDTO[] = storage ? JSON.parse(storage) : [];        

        return accounts;
    } catch (error) {
        throw error;
    }     
}