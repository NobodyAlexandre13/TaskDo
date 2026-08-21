import { StyleSheet, Text, View } from "react-native";

export function CardProgress(){
    return(
        <View style={style.container}>
            <View style={style.areaTitle}>
                <Text style={style.title}>Tarefas do dia</Text>
                <Text style={style.dateTitle}>31 de Agosto</Text>
            </View>
            <View style={style.areaTitleP}>
                <Text style={style.textP}>Progresso</Text>
                <Text style={style.textP}>75%</Text>
            </View>
            <View style={style.backProgress}>
                <View style={[style.frontProgress, {width: '75%'}]}></View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#d7ecee',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 18
    },
    areaTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontWeight: 500,
        fontSize: 16,
    },
    dateTitle: {
        fontWeight: 400,
        fontSize: 12
    },
    areaTitleP: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6
    },
    textP: {
        fontWeight: 600,
        fontSize: 14,
    },
    backProgress: {
        backgroundColor: "#929292",
        width: '100%',
        height: 12,
        borderRadius: 8,
    },
    frontProgress: {
        backgroundColor: "#00e90c",
        height: 12,
        borderRadius: 8,
    }
})