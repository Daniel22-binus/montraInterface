import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {BudgetIcon, HomeIcon} from '../assets';

const Budget = () => {
    return (
        <View>
            <Image source={BudgetIcon} />
            <Text>ini budget</Text>
        </View>
    )
}

export default Budget

const styles = StyleSheet.create({})
