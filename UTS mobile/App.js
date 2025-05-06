import React from 'react';
import { Text, View, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// --- Home Stack Screens ---
const HomeMain = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    {[
      {
        title: 'Rental Mobil Luthfi',
        price: 'Rp 300.000 per hari',
        car: 'Toyota Avanza',
        features: 'AC, Audio, GPS',
        image: 'https://placekitten.com/200/300',
      },
      {
        title: 'Rental Mobil Farel',
        price: 'Rp 250.000 per hari',
        car: 'Honda Brio',
        features: 'AC, Bluetooth, USB Charger',
        image: 'https://placekitten.com/210/300',
      },
      {
        title: 'Rental Mobil Dandi',
        price: 'Rp 350.000 per hari',
        car: 'Suzuki Ertiga',
        features: 'AC, Audio, Kamera Belakang',
        image: 'https://placekitten.com/220/300',
      },
      {
        title: 'Rental Mobil Riyo',
        price: 'Rp 400.000 per hari',
        car: 'Daihatsu Xenia',
        features: 'AC, GPS, Airbag',
        image: 'https://placekitten.com/230/300',
      },
    ].map((item, index) => (
      <View style={styles.card} key={index}>
        <Image source={require('./assets/Toyota.jpg')} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.price}</Text>
          <Button
            title="See Details"
            onPress={() =>
              navigation.navigate('HomeDetails', item)
            }
          />
        </View>
      </View>
    ))}
  </ScrollView>
);

const HomeDetails = ({ route }) => {
  const { title, price, car, features, image } = route.params;

  return (
    <View style={styles.screen}>
      <View style={styles.detailCard}>
      <Image source={require('./assets/Toyota.jpg')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>Mobil: {car}</Text>
        <Text style={styles.cardDescription}>Harga: {price}</Text>
        <Text style={styles.cardDescription}>Fasilitas: {features}</Text>
      </View>
    </View>
  );
};

const HomeStack = createStackNavigator();

function HomeScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeMain" component={HomeMain} options={{ headerShown: false }} />
      <HomeStack.Screen name="HomeDetails" component={HomeDetails} options={{ title: 'Details' }} />
    </HomeStack.Navigator>
  );
}

// --- Explore Screen ---
const ExploreScreen = () => (
  <ScrollView contentContainerStyle={styles.exploreContainer}>
    <View style={styles.searchBox}>
      <Text style={styles.searchText}>🔍 Cari mobil, lokasi, atau kategori...</Text>
    </View>
    <Text style={styles.sectionTitle}>Kategori</Text>
    <View style={styles.categoryRow}>
      <View style={styles.categoryCard}>
        <Text style={styles.categoryText}>🚗 Mobil</Text>
      </View>
      <View style={styles.categoryCard}>
        <Text style={styles.categoryText}>📍 Lokasi</Text>
      </View>
      <View style={styles.categoryCard}>
        <Text style={styles.categoryText}>💼 Paket</Text>
      </View>
    </View>
    <Text style={styles.sectionTitle}>Featured</Text>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Promo Toyota Avanza</Text>
        <Text style={styles.cardDescription}>Diskon 15% selama bulan ini</Text>
        <Button title="Lihat Detail" onPress={() => {}} />
      </View>
    </View>
    <Text style={styles.sectionTitle}>Special Offers</Text>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Promo Honda Brio</Text>
        <Text style={styles.cardDescription}>Diskon 10% untuk pelanggan baru</Text>
        <Button title="Lihat Detail" onPress={() => {}} />
      </View>
    </View>
  </ScrollView>
);

// --- Profile Screen ---
const ProfileScreen = () => (
  <View style={styles.screen}>
    <Image
      source={require('./assets/Profile.png')}
      style={styles.profileImage}
    />
    <Text style={styles.name}>Utaa</Text>
    <Text style={styles.bio}>
      Desainer grafis & penggemar teknologi. Menyukai skateboard dan ngoprek elektronik.
    </Text>
    <View style={styles.infoContainer}>
      <Text style={styles.infoLabel}>Email:</Text>
      <Text style={styles.infoValue}>Utaa@example.com</Text>
      <Text style={styles.infoLabel}>Lokasi:</Text>
      <Text style={styles.infoValue}>Banyuwangi, Indonesia</Text>
    </View>
    <TouchableOpacity style={styles.editButton}>
      <Text style={styles.editButtonText}>Edit Profil</Text>
    </TouchableOpacity>
  </View>
);

// --- App Tabs ---
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home-outline';
            else if (route.name === 'Explore') iconName = 'compass-outline';
            else if (route.name === 'Profile') iconName = 'person-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 15,
    marginVertical: 10,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardContent: {
    paddingTop: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  detailCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 20,
    marginVertical: 10,
    elevation: 5,
  },
  exploreContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  searchBox: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  searchText: {
    fontSize: 16,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryCard: {
    width: '30%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  infoContainer: {
    width: '90%',
    marginTop: 15,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#444',
  },
  infoValue: {
    marginBottom: 10,
    color: '#333',
  },
  editButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
