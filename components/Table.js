 import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableRow = ({row}) => {
    return(
    <View style={styles.row}>
        <View style={styles.cell}>
        <Text style={styles.cellText}>{row.userName}</Text>
        </View>
        <View style={styles.cell}>
        <Text style={styles.cellText}>{row.checkInTime}</Text>
        </View>
    </View>
    )
}

const Table = ({tableData}) => {
    return(
    <View style={styles.table}>
        {tableData.map((each,index) => (
            <TableRow key={index} row={each} />
        ))}
    </View>
    )
}


const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
  },
});

export default Table;