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


export function LandingPageScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.imageWrapper}>
            <Image
                source={profile_pic}
                style={styles.profilePicture} 
            />
        </View>
        <View style={styles.nameRow}>
            <View style={styles.nameInner}>
                <MaterialCommunityIcons name="badge-account-horizontal-outline" style={styles.nameIcon} size={25}/>
                <Text style={styles.nameText}>
                    Jon Perry
                </Text>
            </View>
            <View>

            </View>
        </View>
        <View style={styles.jobTitleRow}>
            <View style={styles.jobInnerRow}>
                <MaterialCommunityIcons name="remote-desktop" style={styles.nameIcon} size={25}/>
                <Text style={styles.nameText}>
                    Machine Learning Engineer
                </Text>
            </View>
            <View>

            </View>
        </View>
        <View style={styles.itemWrapper}>
            {/** Introduction Landing Page content ...I'm awk af so here's my weirdness GGnoRE */}
            <View style={styles.itemOutterContainer}>
                <View style={styles.itemInnerContainer}>
                    <Text style={styles.itemTitle}>
                        Introduction
                    </Text>
                    <Text style={styles.text}>
                        ....but can we add Machine Learning to it?! No, seriously...can we?
                    </Text>
                    <Text style={styles.text}>
                        Jon is the name and <i>Machine Learning</i> is the game. 
                    </Text>
                    <Text style={styles.text}>
                        I'm agile, versatile, and self-driven. I have a <i>Computer Science</i> graduate degree with extensive research background into <i>Computer Vision</i> that led to multiple publications, 
                        but my professional career started me into <i>Natural Language Processing</i>. I digested then invested. 
                        Delivered impact within my first month to new product features on a servable TensorFlow Deep Learning model. 
                        In other words, I strive to learn and grow from day 1 to my last.
                    </Text>
                    <Text style={styles.text}>
                        My path was not linear...
                    </Text>
                </View>  
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