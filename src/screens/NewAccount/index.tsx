import { useState, useRef, useEffect } from 'react'
import { Alert, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { AccountDTO } from '@models/AccountDTO'

import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Select } from '@components/Select'

import {Container, Content, Form, FormScrollView} from './styles'
import { createAccount } from '@services/account/createAccount'
import { getAllAccounts } from '@services/account/getAllAccounts'
import { getAccountById } from '@services/account/getAccountById'
import { AppError } from '@utils/AppError'

type TypeSelected = 'Receitas' | 'Despesas';

export const NewAccount = () => {

    const navigation = useNavigation();

    const newAccountCodeRef = useRef<TextInput>(null)

    const [accounts, setAccounts] = useState<AccountDTO[]>([])
    const [accountFatherSelected, setAccountFatherSelected] = useState<string>('')   
    const [acceptEntries, setAcceptEntries] = useState<boolean>(false)
    const [typeSelected, setTypeSelected] = useState<TypeSelected>('Receitas')
    const [idAccount, setIdAccount] = useState<string>('')
    const [name, setName] = useState<string>('')


    const handleAcceptEntries = (value: string) => {
        setAcceptEntries(value === 'Sim' ? true : false)
    }

    const handleTypeSelected = (value: string) => {
        setTypeSelected(value === 'Receitas' ? 'Receitas' : 'Despesas')        
    }

    const generateNewId = async (idFather: string) => {
        const accounts = await getAllAccounts();
        const childAccounts = accounts.filter(
          (account) => account.accountFather === idFather
        );
        let lastIdSequence = 0;
      
        childAccounts.forEach((child) => {          
          const idSplit = child.id.split(".");
          const idSequence = parseInt(idSplit[idSplit.length - 1]);
      
          if (idSequence > lastIdSequence) {
            lastIdSequence = idSequence;
          }
        });

        const newIdSequence = lastIdSequence + 1;

        const idSplit = idFather ? idFather.split(".") : [];

        const level = idSplit.length;

        let newId = "";

        if(newIdSequence === 1000){
            const newIdLevel2 = parseInt(idSplit[1]) + 1
            newId =  `${idSplit[0]}.${newIdLevel2}.${newIdSequence  - 1}`
            setIdAccount(newId)
            return
        }
        
        setIdAccount(`${idFather}.${newIdSequence}`)
      };
      

    const handleAccounFathertSelected = (value: string) => {
        setAccountFatherSelected(value)        
        const id = value.split(' - ')[0]

        generateNewId(id)                
    }
    
    const handleSave = async () => {
        try {
            if(
                idAccount.trim().length === 0 &&
                name.trim().length === 0)
            {
                throw new Error('Preencha os campos obrigatórios')
            }

            const newAccount : AccountDTO = {
                id: idAccount,
                name,
                type: typeSelected === 'Receitas' 
                    ? 'revenue' 
                    : 'expense',
                acceptEntries,
                accountFather: accountFatherSelected.split(' - ')[0]         
            }                        
            
            const accountFather = await getAccountById(newAccount.accountFather)
            
            if(accountFather?.acceptEntries){
                return Alert.alert(
                    'Inserir Conta', 
                    'Não é possível criar contas filhas para contas que aceitam lançamentos.'
                )
            }

            if(accountFather
                && accountFather?.type !== newAccount.type){
                return Alert.alert(
                    'Inserir Conta',
                    'Não é possível criar contas filhas para contas de tipos diferentes.'
                )
            }
                    

            await createAccount(newAccount)
            newAccountCodeRef.current?.blur();
            
            navigation.navigate('chartOfAccount')
                
        } catch (error) {
            if(error instanceof AppError){
                Alert.alert('Inserir Conta', error.message)
            } else {
                Alert.alert('Inserir Conta', 'Não foi possível salvar a conta.')
            }
        }
    }

    const fetchAccounts = async () => {
        try {
            const data = await getAllAccounts()            
            setAccounts(data)
        } catch (error) {
            Alert.alert('Aviso', 'Desculpe, ocorreu o erro. Favor entrar em contato com o suporte.')
        }
    }

    useEffect(() => {
        fetchAccounts()
    }, [])

    return (
        <Container>
            <Header 
                title='Inserir Conta' 
                showBackButton 
                buttonConfirm='save' 
                onSave={handleSave} 
            />
                     
                <Content>                    
                    <Form behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <FormScrollView showsVerticalScrollIndicator={false}>
                            <Select 
                                label='Conta pai'  
                                options={
                                    accounts.sort((a, b) => {
                                        if(a.type === 'revenue' && a.id < b.id) return -1;
                                    }).map(account => account.id + ' - ' + account.name)}
                                onChange={handleAccounFathertSelected} 
                                textValue={accountFatherSelected}
                            />
                            <Input 
                                label='Código *' 
                                placeholder='Código da conta'
                                autoCorrect={false}                        
                                value={idAccount}
                                inputRef={newAccountCodeRef}
                                onChangeText={setIdAccount}
                                returnKeyType='done'
                                onSubmitEditing={handleSave}
                            />
                            <Input 
                                label='Nome *'
                                placeholder='Nome da conta'
                                autoCorrect={false}                        
                                onChangeText={setName}
                                returnKeyType='done'
                                onSubmitEditing={handleSave}
                            />
                            <Select 
                                label='Tipo *' 
                                options={['Receitas', 'Despesas']} 
                                textValue={typeSelected}
                                onChange={handleTypeSelected} 
                            />
                            <Select 
                                label='Aceita lançamentos *' 
                                options={['Sim', 'Não']}
                                textValue={acceptEntries ? 'Sim' : 'Não'}
                                onChange={handleAcceptEntries} 
                            />
                        </FormScrollView>
                    </Form>                    
                </Content>            
        </Container>
    )
}