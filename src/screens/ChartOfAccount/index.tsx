import { useState, useCallback, useEffect } from "react";
import { Alert, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Search } from "@components/Search";
import { ChartOfAccountItem } from "@components/ChartOfAccountItem";
import { AccountEmpty } from "@components/AccountEmpty";

import { 
    Container, 
    Content,     
    HeaderList, 
    NumberOfRecords, 
    Title 
} from "./styles";
import { AccountDTO } from "@models/AccountDTO";
import { getAllAccounts } from "@services/account/getAllAccounts";
import { removeAccountById } from "@services/account/removeAccountById";

export const ChartOfAccount = () => {

    const navigation = useNavigation();

    const [accounts, setAccounts] = useState<AccountDTO[]>([])
    const [accountsFiltered, setAccountsFiltered] = useState<AccountDTO[]>([])            

    const handleDeleteCheck = (item: AccountDTO) => {               
        Alert.alert('Aviso', 'Deseja realmente excluir esta conta?', [
            {
                text: 'Não',
                style: 'cancel'            
            },
            {
                text: 'Sim',
                onPress: () => removeAccount(item.id)
            }
        ])
    }

    const handleAddAccount = () => {
        navigation.navigate('newAccount')
    }

    const removeAccount = async (id: string) => {
        try {
            await removeAccountById(id);
            fetchAccounts();
        } catch (error) {
            Alert.alert('Aviso', 'Desculpe, ocorreu o erro. Favor entrar em contato com o suporte.')
        }
    }

    const handleSearchAccount = async (value: string) => {
        setAccountsFiltered(
            accounts.filter(
                account => 
                    account.name.toLowerCase().includes(value.toLowerCase()
                )
            )
        )
    }

    const fetchAccounts = async () => {
        try {
            const data = await getAllAccounts()
            setAccounts(data)
        } catch (error) {
            Alert.alert('Aviso', 'Desculpe, ocorreu o erro. Favor entrar em contato com o suporte.')
        }
    }

    useFocusEffect(useCallback(() => {
        fetchAccounts()
    }, []))

    useEffect(() => {
        setAccountsFiltered(accounts)
    }, [accounts])

    return (
        <Container>
            <Header title="Plano de Contas" buttonConfirm="add" onAdd={handleAddAccount} />

            <Search setValues={handleSearchAccount} />

            <Content>
                <HeaderList>
                    <Title>Listagem</Title>
                    <NumberOfRecords>{accounts.length} registros</NumberOfRecords>
                </HeaderList>
                
                
                    <FlatList
                        style={{width: '100%'}}
                        data={accountsFiltered.sort((a, b) => {
                            if(a.type === 'revenue' && a.id < b.id) return -1;
                        })}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                                (
                                    <ChartOfAccountItem 
                                        onDelete={() => handleDeleteCheck(item)} 
                                        title={`${item.id} - ${item.name}`} 
                                        tintColor={item.type === 'revenue' ? 'primary' : 'secundary'} />     
                                )
                            )
                        }
                        ListEmptyComponent={() => (
                            <AccountEmpty message="Nenhuma conta cadastrada" />
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[
                            {paddingBottom: 20},
                            accounts.length === 0 && {flex: 1}
                        ]}
                    />                               
                
            </Content>           
        </Container>
    );
};