import React, { useCallback, useMemo } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
  Text,
  Alert,
  Image
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "./styles/colors";
import profile_pic from '../assets/profile_pic.jpg';

{/** Sticking with a solid theme set here, so I'll use FA! */}
import { MaterialCommunityIcons } from 'react-native-vector-icons';


export function ContactScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.nameRow}>
            <View style={styles.nameInner}>
                <MaterialCommunityIcons name="badge-account-horizontal-outline" style={styles.nameIcon} size={25}/>
                <Text style={styles.nameText}>
                    Contact Screen
                </Text>
            </View>
            <View>

            </View>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.offwhite,
        justifyContent: 'center',
        margin: 'auto',
    },
    text:{
        color: colors.black,
        paddingVertical: 10,
    },
    socialBar: {
        backgroundColor: colors.gray,
        flexDirection:'row',
        justifyContent:'center',
    },
    itemOutterContainer: {
        paddingVertical: 20,
        width:'90%',
        justifyContent:'center',
        margin:'auto',
    },
    itemInnerContainer:{
        backgroundColor: 'transparent',
        padding:10,
        borderRadius:30,
        justifyContent: 'center'
    },
    itemWrapper:{
        paddingHorizontal: 20,
        paddingVertical: 50,
        justifyContent: 'center',
        width:'100%',
        margin:'auto',
    },
    itemTitle: {
        fontSize: 34,
        fontWeight:'700',
        color: colors.black,
        fontFamily: 'Roboto',
        paddingBottom: 15,
        textAlign: 'center',
    },
    profilePicture:{
        width:180,
        height: 180,
        borderRadius:90,
        borderColor:colors.grayopacity,
        borderWidth: 2,
    },
    imageWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:40,
    },
    nameRow:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center'
    },
    jobTitleRow:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center'
    },
    jobInnerRow:{
        flexDirection:'row',
    },
    nameInner:{
        flexDirection:'row',
        paddingTop: 20,
        paddingHorizontal: 15,


    },
    nameText:{
        fontFamily:'Roboto',
        fontSize:24,
        fontWeight:'600',
        paddingLeft: 15,
    }
});