import { StyleSheet, Text, View } from "react-native";

export function CardProgress(){
    return(
        <View style={style.container}>
            <View>
                <Text>Tarefas do dia</Text>
                <Text>31 de Agosto</Text>
            </View>
            <View>
                <Text>Progresso</Text>
                <Text>50%</Text>
            </View>
            <View>
                <View>

                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#60646C',
        borderRadius: 12,
        padding: 10
    }
})