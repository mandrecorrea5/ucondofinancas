import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChartOfAccount } from '@screens/ChartOfAccount';
import { NewAccount } from '@screens/NewAccount';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
        screenOptions={{
            headerShown: false,
            contentStyle: {
            backgroundColor: 'transparent'
            }
        }}
        >
        <Screen 
            name="chartOfAccount"
            component={ChartOfAccount}
        />
        <Screen 
            name="newAccount"
            component={NewAccount}
        />
        </Navigator>
    );
}