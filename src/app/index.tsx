import { FloatingActionButton, Host, Icon } from "@expo/ui/jetpack-compose";
import { StyleSheet, Text, View } from "react-native";

export default function Home(){
  return(
    <View style={styles.container}>
      <View>
        <Text>TaskDo</Text>
      </View>
      <Text>Adicionar tarefas</Text>
      <Host matchContents>
        <FloatingActionButton>
          <FloatingActionButton.Icon>
            <Icon source={require('@/assets/images/tabIcons/home.png')} />
          </FloatingActionButton.Icon>
        </FloatingActionButton>
      </Host>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 18
  }
})