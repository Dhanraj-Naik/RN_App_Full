import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//MARGIN
//BORDER
//PADDING
//CONTENT

//PARENT VIEW PROPERTIES: 
//1.ALIGN_ITEMS
//2.FLEX_DIRECTION
//3.JUSTIFY_CONTENT

//ALIGN_ITEMS => default : 'stretch'
//note: when we make align_items :'flex-start'||'flex-end'|| 'center'
// items which were stretched will we wrapped
//same applies in flex_direction: row as well

//FLEX_DIRECTION: 'COLUMN'
//Note: whenever flex-direction is column,
// align_items will work horizontally.

//JUSTIFY_CONTENT
//'justify_content' will work vertically

//FLEX_DIRECTION: 'ROW'
//Note: whenever flex-direction is row,
// align_items will work vertically

//JUSTIFY_CONTENT
//'justify_content' will work horizontally


//CHILD_PROPERTIES:
//1.flex
//2.alignSelf

//POSITON
//1.RELATIVE
//2.ABSOLUTE
//left, top,right, bottom are properties of absolute.
//some properties of relative layout are also supported by absolute.
//top,left is also supported in relative

const BoxScreen = ({
    params,
}) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>Box 1</Text>
            <Text style={styles.textStyle}>Box 2</Text>
            <Text style={styles.textStyle}>Box 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginVertical: 20,
        marginHorizontal: 15,
        borderWidth: 4,
        borderColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'red',
        // flexDirection: 'row',
        height: 600,

    },
    textStyle: {
        backgroundColor: 'white',
        padding: 5,
        marginBottom: 1,
        marginRight: 1,
        flex: 1,
        alignSelf: 'stretch',
    },
});

export default BoxScreen;
