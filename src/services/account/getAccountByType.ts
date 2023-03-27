import AsyncStorage from "@react-native-async-storage/async-storage";

import { ACCOUNT_COLLECTION } from "@storage/config";
import { AccountDTO } from "@models/AccountDTO";

export const getAccountByType = async (type: string) => {
    try {
        const storage = await AsyncStorage.getItem(ACCOUNT_COLLECTION);

        const accounts : AccountDTO[] = storage ? JSON.parse(storage) : [];

        return accounts.filter((account) => account.type === type);
    } catch (error) {
        throw error;
    }     
}
