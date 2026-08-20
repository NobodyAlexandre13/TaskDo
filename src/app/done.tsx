import { FloatingActionButton, Host, Icon } from "@expo/ui/jetpack-compose";
import { Text, View } from "react-native";


export default function Done(){
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>
                Tarefas feitas!!
            </Text>
            <Host matchContents>
                <FloatingActionButton
                    onClick={() => console.log('FAB pressed')}>
                    <FloatingActionButton.Icon>
                        <Icon source={require('@/assets/images/tabIcons/home.png')} />
                    </FloatingActionButton.Icon>
                </FloatingActionButton>
            </Host>
        </View>
    )
}