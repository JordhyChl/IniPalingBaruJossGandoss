<Button
            onPress={() => navigation.navigate('Mogok')}
            title="Penanganan Mobil Mogok"
          />
          <Button
            onPress={() => navigation.navigate('BKScreen')}
            title="Penanganan Ban Kempis"
          />
          <Button
            onPress={() => navigation.navigate('TNScreen')}
            title="Penanganan Temperatur Naik"
          />

          <ScrollView contentContainerStyle={styles.view}>
          
          </ScrollView>

      <TouchableOpacity
            style={styles.button}
            onPress={() => { navigateTo('Mobil Mogok'); }}
      >
            <Text style={{color: "#ffffff"}}>Mobil Mogok</Text>
      </TouchableOpacity>



      <MapView
         showsUserLocation={true}
         showsMyLocationButton={true}
         style={{ 
            flexDirection: "column",
              height: 700,
              width: 430,
              marginTop: 50,
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