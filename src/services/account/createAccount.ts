import AsyncStorage from "@react-native-async-storage/async-storage";

import { ACCOUNT_COLLECTION } from "@storage/config";
import { AccountDTO } from "@models/AccountDTO";
import { getAllAccounts } from "./getAllAccounts";
import { AppError } from "@utils/AppError";

export const createAccount = async (newAccount: AccountDTO) => {
    try {                
        const storageAccounts = await getAllAccounts();        

        const accountAlreadyExists = storageAccounts.find((account) => account.id === newAccount.id);

        if(accountAlreadyExists) {
            throw new AppError('Essa conta já existe!');
        }

        if(newAccount.id.trim().length === 0) {
            throw new AppError('O código da conta não pode ser vazio!');
        }

        if(newAccount.name.trim().length === 0) {
            throw new AppError('O nome da conta não pode ser vazio!');
        }

        const storage = JSON.stringify([...storageAccounts, newAccount]);        
        

        await AsyncStorage.setItem(ACCOUNT_COLLECTION, storage);
    } catch (error) {
        throw error;
    }     
}