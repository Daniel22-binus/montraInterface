import React from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { BACKGROUND_COLOR, BOLD_FONT, PRIMARY_FONT, SECONDARY_COLOR, TITLE_COLOR } from '../../constant'
import ProgressBar from './ProgressBar'

const TotalBudget = ({totalBudget, currentUse}) => {
    return (
        <LinearGradient
          style={styles.linear}
          colors={[SECONDARY_COLOR, BACKGROUND_COLOR]}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}>
          <Text style={styles.title}> Total Budget</Text>
          <Text style={styles.TotBudget}>Rp. {totalBudget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>

          <ProgressBar current={currentUse} total={totalBudget} />
          <Text style={styles.TotBudgetUse}>Rp. {currentUse.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
        </LinearGradient>
    )
}

export default TotalBudget

const WindowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    linear: {
        width: WindowWidth * 0.88,
        height: 130,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 15,
      },
    title: {
        fontFamily: PRIMARY_FONT,
        color: TITLE_COLOR,
        fontSize: 15,
        fontStyle: 'italic',
      },
    
      TotBudget: {
        fontFamily: BOLD_FONT,
        color: TITLE_COLOR,
        fontSize: 18,
        textAlign: 'left',
        marginLeft: WindowWidth * 0.08,
        marginBottom: 5,
      },
    
      TotBudgetUse: {
        fontFamily: BOLD_FONT,
        color: TITLE_COLOR,
        fontSize: 15,
      },
})
