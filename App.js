//import * as React from 'react';
import React, {Component} from 'react';
import { View, ScrollView,
    StyleSheet,
    Text,
    Button,
    ImageBackground,
    TouchableOpacity, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Picker} from '@react-native-community/picker';
import MapView from 'react-native-maps';
const backgroundImage1 = require('./img/bg1.jpg');
const backgroundImage2 = require('./img/bg2.jpg');
const backgroundImage3 = require('./img/bg3.jpg');

const Stack = createStackNavigator();
    //Troubleshoot
    function Troubleshoot({ navigation }) {
      return (
        <ImageBackground
          source={backgroundImage1}
          style={styles.container}
          imageStyle={{ opacity: 0.3 }}
        >
        <TouchableOpacity
              style={styles.buttonBack}
            >
              <Text style={{color: "#ffffff"}}>Troubleshoot</Text>
          </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.view}>
          <Text style={styles.text2}>
              Menu Troubleshoot
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Mobil Mogok')}
            >
              <Text style={{color: "#ffffff"}}>Mobil Mogok</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Ban Kempis')}
            >
              <Text style={{color: "#ffffff"}}>Ban Kempis</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Temperatur Naik')}
            >
              <Text style={{color: "#ffffff"}}>Temperatur Naik</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
      );
    }

    //Mobil Mogok
    function MobilMogok({ navigation }) {
      return (
      <ImageBackground
          source={backgroundImage1}
          style={styles.container}
          imageStyle={{ opacity: 0.3 }}
        >
        <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Kembali</Text>
          </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.view}>
          <Text style={styles.text2}>
              Penanganan Mobil Mogok
          </Text>
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Periksa Aki')}
            >
              <Text style={{color: "#ffffff"}}>Periksa Aki</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Periksa Kabel Busi')}
            >
              <Text style={{color: "#ffffff"}}>Periska Kabel Busi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Periksa Sekring')}
            >
              <Text style={{color: "#ffffff"}}>Periksa Sekring</Text>
            </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
      );
    }
    
    //Periksa Aki
    function PAScreen({ navigation }) {
      return (
        <ScrollView>
          <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Kembali</Text>
          </TouchableOpacity>
              <View style={{ flexDirection: "row",
              height: 360,
              width: 480,
              padding: 10,
              justifyContent: "center", 
              backgroundColor: "blue", }} />
          <Text style={styles.text}>Konten Periksa Aki</Text>
          <Text style={styles.textSub}>1.  Periksa Kabel Aki. Kabel Aki harus terpasang secara kencang di kedua kutub, kutub positif atau kutub negatif. Dan periksa juga apakah kualitas kabel tersebut masih baik.</Text>
          <Text style={styles.textSub}>2.  Periksa Indikator warna aki. Indikator tersebut menunjukan keadaan aki apakah aki dalam keadaan baik atau tidak</Text>
          <Text style={styles.textSub}>3.  Periksa Kutub Positif dan Negatif, apakah terdapat kotoran atau kerak-kerak yang mengganggu arus listrik kendaraan.</Text>
        </ScrollView>
      );
    }
    
    //Periksa Kabel Busi
    function PKBScreen({ navigation }) {
      return (
        <ScrollView>
        <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Kembali</Text>
          </TouchableOpacity>
              <View style={{ flexDirection: "row",
              height: 360,
              width: 480,
              padding: 10,
              justifyContent: "center", 
              backgroundColor: "blue", }} />
          <Text style={styles.text}>Konten Periksa Kabel Busi</Text>
          <Text style={styles.textSub}>1.  Periksa Kabel Aki. Kabel Aki harus terpasang secara kencang di kedua kutub, kutub positif atau kutub negatif. Dan periksa juga apakah kualitas kabel tersebut masih baik.</Text>
          <Text style={styles.textSub}>2.  Periksa Indikator warna aki. Indikator tersebut menunjukan keadaan aki apakah aki dalam keadaan baik atau tidak</Text>
          <Text style={styles.textSub}>3.  Periksa Kutub Positif dan Negatif, apakah terdapat kotoran atau kerak-kerak yang mengganggu arus listrik kendaraan.</Text>
        </ScrollView>
      );
    }
    
    //Periksa Sekring
    function PSScreen({ navigation }) {
      return (
        <ScrollView>
        <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Kembali</Text>
          </TouchableOpacity>
              <View style={{ flexDirection: "row",
              height: 360,
              width: 480,
              padding: 10,
              justifyContent: "center", 
              backgroundColor: "blue", }} />
          <Text style={styles.text}>Konten Periksa Sekring</Text>
          <Text style={styles.textSub}>1.  Periksa Kabel Aki. Kabel Aki harus terpasang secara kencang di kedua kutub, kutub positif atau kutub negatif. Dan periksa juga apakah kualitas kabel tersebut masih baik.</Text>
          <Text style={styles.textSub}>2.  Periksa Indikator warna aki. Indikator tersebut menunjukan keadaan aki apakah aki dalam keadaan baik atau tidak</Text>
          <Text style={styles.textSub}>3.  Periksa Kutub Positif dan Negatif, apakah terdapat kotoran atau kerak-kerak yang mengganggu arus listrik kendaraan.</Text>
        </ScrollView>
      );
    }


    //Ban Kempis
    function BKScreen({ navigation }) {
      return (
        <ScrollView>
        <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Kembali</Text>
          </TouchableOpacity>
              <View style={{ flexDirection: "row",
              height: 360,
              width: 480,
              padding: 10,
              justifyContent: "center", 
              backgroundColor: "blue", }} />
          <Text style={styles.text}>Konten Ban Kempis</Text>
          <Text style={styles.textSub}>1.  Periksa Kabel Aki. Kabel Aki harus terpasang secara kencang di kedua kutub, kutub positif atau kutub negatif. Dan periksa juga apakah kualitas kabel tersebut masih baik.</Text>
          <Text style={styles.textSub}>2.  Periksa Indikator warna aki. Indikator tersebut menunjukan keadaan aki apakah aki dalam keadaan baik atau tidak</Text>
          <Text style={styles.textSub}>3.  Periksa Kutub Positif dan Negatif, apakah terdapat kotoran atau kerak-kerak yang mengganggu arus listrik kendaraan.</Text>
        </ScrollView>
      );
    }

    //Temperatur Naik
    function TNScreen({ navigation }) {
      return (
        <ScrollView>
        <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Kembali</Text>
          </TouchableOpacity>
              <View style={{ flexDirection: "row",
              height: 360,
              width: 480,
              padding: 10,
              justifyContent: "center", 
              backgroundColor: "blue", }} />
          <Text style={styles.text}>Konten Temperatur Naik</Text>
          <Text style={styles.textSub}>1.  Periksa Kabel Aki. Kabel Aki harus terpasang secara kencang di kedua kutub, kutub positif atau kutub negatif. Dan periksa juga apakah kualitas kabel tersebut masih baik.</Text>
          <Text style={styles.textSub}>2.  Periksa Indikator warna aki. Indikator tersebut menunjukan keadaan aki apakah aki dalam keadaan baik atau tidak</Text>
          <Text style={styles.textSub}>3.  Periksa Kutub Positif dan Negatif, apakah terdapat kotoran atau kerak-kerak yang mengganggu arus listrik kendaraan.</Text>
        </ScrollView>
      );
    }

    //Service&Tips
    function ServiceTips({ navigation }) {
      return (
        <ImageBackground
          source={backgroundImage2}
          style={styles.container}
          imageStyle={{ opacity: 0.3 }}
        >
        <TouchableOpacity
              style={styles.buttonBack}
            >
              <Text style={{color: "#ffffff"}}>Service&Tips</Text>
          </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.view}>
          <Text style={styles.text2}>
              Menu Service &Tips
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Service')}
            >
              <Text style={{color: "#ffffff"}}>Service</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Tips')}
            >
              <Text style={{color: "#ffffff"}}>Tips</Text>
            </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
      );
    }

    //Service
    class Service extends Component {
    state = {Tahun: ''}
    updateTahun = (Tahun) => {
       this.setState({ Tahun: Tahun })
    }
    state = {Merek: ''}
    updateMerek = (Merek) => {
       this.setState({ Merek: Merek })
    }
    state = {Tipe: ''}
    updateTipe = (Tipe) => {
       this.setState({ Tipe: Tipe })
    }
    state = {Interval: ''}
    updateInterval = (Interval) => {
       this.setState({ Interval: Interval })
    }
    render() {
       return (
        <View>
        <ScrollView>
        <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Service</Text>
          </TouchableOpacity>
                <Picker selectedValue = {this.state.Tahun} onValueChange = {this.updateTahun}>
                        <Picker.Item label = "Tahun" />
                        <Picker.Item label = "2018" value = "2018" />
                        <Picker.Item label = "2019" value = "2019" />
                        <Picker.Item label = "2020" value = "2020" />
                </Picker>
                <Picker selectedValue = {this.state.Merek} onValueChange = {this.updateMerek}>
                        <Picker.Item label = "Merek" />
                        <Picker.Item label = "Toyota" value = "Toyota" />
                        <Picker.Item label = "Honda" value = "Honda" />
                </Picker>
                <Picker selectedValue = {this.state.Tipe} onValueChange = {this.updateTipe}>
                        <Picker.Item label = "Tipe" />
                        <Picker.Item label = "Camry" value = "Camry" />
                        <Picker.Item label = "Accord" value = "Accord" />
                </Picker>
                <Picker selectedValue = {this.state.Interval} onValueChange = {this.updateInterval}>
                        <Picker.Item label = "Interval" />
                        <Picker.Item justifyContent label = "1.000 KM" value = "1.000 KM" />
                        <Picker.Item label = "5.000 KM" value = "5.000 KM" />
                        <Picker.Item label = "10.000 KM" value = "10.000 KM" />
                        <Picker.Item label = "15.000 KM" value = "15.000 KM" />
                        <Picker.Item label = "20.000 KM" value = "20.000 KM" />
                </Picker>
                {/* <Text style = {styles.text2}>{this.state.user}</Text> */}
                {/* <Text style={styles.header1}>{activeRoute.name}</Text> */}
            {/* <View style={{ flexDirection: "row",
            height: 360,
            width: 480,
            padding: 10,
            justifyContent: "center", 
            backgroundColor: "blue", }} /> */}
        <Text style={styles.text}>Detail Service:</Text>
        <Text style={styles.textSub}>Detail nya disini</Text>
        </ScrollView>
    </View>
       )
    }
 }

    //Tips
    function Tips({ navigation }) {
      return (
        <ImageBackground
          source={backgroundImage2}
          style={styles.container}
          imageStyle={{ opacity: 0.3 }}
        >
        <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Kembali</Text>
          </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.view}>
          <Text style={styles.text2}>
              Menu Service &Tips
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Tips Satu')}
            >
              <Text style={{color: "#ffffff"}}>Tips Satu</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Tips Dua')}
            >
              <Text style={{color: "#ffffff"}}>Tips Dua</Text>
            </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
      );
    }

    //Tips Satu
    function TipsSatu({ navigation }) {
      return (
        <ScrollView>
        <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Kembali</Text>
          </TouchableOpacity>
              <View style={{ flexDirection: "row",
              height: 360,
              width: 480,
              padding: 10,
              justifyContent: "center", 
              backgroundColor: "blue", }} />
          <Text style={styles.text}>Konten Tips Satu</Text>
          <Text style={styles.textSub}>1.  Periksa Kabel Aki. Kabel Aki harus terpasang secara kencang di kedua kutub, kutub positif atau kutub negatif. Dan periksa juga apakah kualitas kabel tersebut masih baik.</Text>
          <Text style={styles.textSub}>2.  Periksa Indikator warna aki. Indikator tersebut menunjukan keadaan aki apakah aki dalam keadaan baik atau tidak</Text>
          <Text style={styles.textSub}>3.  Periksa Kutub Positif dan Negatif, apakah terdapat kotoran atau kerak-kerak yang mengganggu arus listrik kendaraan.</Text>
        </ScrollView>
      );
    }

    //Tips Dua
    function TipsDua({ navigation }) {
      return (
        <ScrollView>
        <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Kembali</Text>
          </TouchableOpacity>
              <View style={{ flexDirection: "row",
              height: 360,
              width: 480,
              padding: 10,
              justifyContent: "center", 
              backgroundColor: "blue", }} />
          <Text style={styles.text}>Konten Tips Dua</Text>
          <Text style={styles.textSub}>1.  Periksa Kabel Aki. Kabel Aki harus terpasang secara kencang di kedua kutub, kutub positif atau kutub negatif. Dan periksa juga apakah kualitas kabel tersebut masih baik.</Text>
          <Text style={styles.textSub}>2.  Periksa Indikator warna aki. Indikator tersebut menunjukan keadaan aki apakah aki dalam keadaan baik atau tidak</Text>
          <Text style={styles.textSub}>3.  Periksa Kutub Positif dan Negatif, apakah terdapat kotoran atau kerak-kerak yang mengganggu arus listrik kendaraan.</Text>
        </ScrollView>
      );
    }

    //Workshop
    function HalamanWorkshop({ navigation }) {
      return (
      <ScrollView>
        <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Kembali</Text>
          </TouchableOpacity>
              <MapView
         showsUserLocation={true}
         showsMyLocationButton={true}
         style={{ 
            flexDirection: "column",
              height: 800,
              width: 430,
              justifyContent: "center",
             }} //window pake Dimensions
         region={{
            latitude: -6.372368,
            longitude: 106.824179,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05 
            }} 
       >
      <MapView.Marker
         coordinate={{
            latitude: -6.3701211,
            longitude: 106.8338548,
            }}
             title="Sinar Alam Motor"
             description="+62217863937"/>
      <MapView.Marker
         coordinate={{
            latitude: -6.365328,
            longitude: 106.833801,
            }}
             title="Bridgestone One Stop Service Depok"
             description="+622129049600"/>
      <MapView.Marker
         coordinate={{
            latitude: -6.3800067,
            longitude: 106.831108,
            }}
             title="Fortuna Auto Service - Depok"
             description="+622177201818"/>

      </MapView>
        </ScrollView>

      );
    }

    //Games
    function Games({ navigation }) {
      return (
        <ScrollView>
        <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={{color: "#ffffff"}}>Kembali</Text>
          </TouchableOpacity>
              <View style={{ flexDirection: "row",
              height: 360,
              width: 480,
              padding: 10,
              justifyContent: "center", 
              backgroundColor: "blue", }} />
          <Text style={styles.text}>Konten Games</Text>
        </ScrollView>
      );
    }



const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
      backgroundColor: '#ECEFF1',
    },
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 40,
        padding: 20,
    },
    header1: {
        fontSize: 28,
        marginBottom: '30%',
    },
    button: {
      alignItems: "center",
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: "#5f7d86",
       marginTop: 10,
      height: 40,
      width: 300
      //paddingBottom: 10,
      // padding: 25
    },
    buttonBack: {
     
      justifyContent: 'center',
      backgroundColor: "#5f7d86",
      width: 430,
      padding: 10
    },
    text2: {
        fontSize: 20,
        width: '70%',
        textAlign: 'center',
        lineHeight: 30,
        marginBottom: '10%',
    },
    text: {
        fontSize: 20,
        width: '70%',
        textAlign: 'justify',
        lineHeight: 30,
        marginBottom: '1%',
        padding: 11
    },
    textSub: {
        fontSize: 18,
        textAlign: 'justify',
        lineHeight: 30,
        marginBottom: '5%',
        width: '100%',
        padding: 15
  },
  drawerItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#ffffff',
    color: '#ffffff',
    height: 170,
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#fff"
  },

});

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Troubleshoot">
        <Drawer.Screen name="Troubleshoot" component={Troubleshoot} />
        <Drawer.Screen name="Service & Tips" component={ServiceTips} />
        <Drawer.Screen name="Workshop" component={HalamanWorkshop} />
        <Drawer.Screen name="Games" component={Games} />
        <Drawer.Screen name="Mobil Mogok" component={MobilMogok} />
        <Drawer.Screen name="Periksa Aki" component={PAScreen} />
        <Drawer.Screen name="Periksa Kabel Busi" component={PKBScreen} />
        <Drawer.Screen name="Periksa Sekring" component={PSScreen} />
        <Drawer.Screen name="Ban Kempis" component={BKScreen} />
        <Drawer.Screen name="Temperatur Naik" component={TNScreen} />
        <Drawer.Screen name="Service" component={Service} />
        <Drawer.Screen name="Tips" component={Tips} />
        <Drawer.Screen name="Tips Satu" component={TipsSatu} />
        <Drawer.Screen name="Tips Dua" component={TipsDua} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
