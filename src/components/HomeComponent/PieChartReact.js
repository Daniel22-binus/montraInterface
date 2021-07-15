import React from 'react'
import {Text, StyleSheet, Dimensions} from 'react-native'
import { PieChart } from 'react-native-svg-charts'

export default class PieChartReact extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50]

        const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

        const pieData = data
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))

        return (
            <PieChart style={styles.container} data={pieData} >
                <Text style={styles.text}>Januari</Text>
            </PieChart>
        )
    }
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        height: 200,
        marginVertical: 12,
        backgroundColor: 'white'
    },
    text: {
        color: "red",
        position: "absolute",
        top: 85,
        left: windowWidth * 0.42,
        fontSize: 18,
    }
})