import { CardProgress } from "@/components/CardProgress";
import { FloatingActionButton, Host, Icon } from "@expo/ui/jetpack-compose";
import { StyleSheet, Text, View } from "react-native";

export default function Home(){
  return(
    <View style={styles.container}>
      <View style={styles.areaTitle}>
        <Text style={styles.title}>Tarefas a fazer</Text>
      </View>
      <CardProgress />
      <Host 
        matchContents
        style={{ position: 'absolute', bottom: 0, right: 20, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}
      >
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
  },
  areaTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
    textTransform: 'uppercase',

  }
})