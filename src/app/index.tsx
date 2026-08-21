import { CardProgress } from "@/components/CardProgress";
import { FloatingActionButton, Host, Icon } from "@expo/ui/jetpack-compose";
import { StyleSheet, Text, View } from "react-native";

export default function Home(){
  return(
    <View style={styles.container}>
      <View>
        <Text>TaskDo</Text>
      </View>
      <Host matchContents>
        <FloatingActionButton>
          <FloatingActionButton.Icon>
            <Icon source={require('@/assets/images/tabIcons/home.png')} />
          </FloatingActionButton.Icon>
        </FloatingActionButton>
      </Host>
      <CardProgress />
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