import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,FlatList,StatusBar} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { router } from 'expo-router';
import {Drawer} from "expo-router/drawer";



const recentReports = [
  { id: "1", type: "Theft", status: "In Progress" },
  { id: "2", type: "Cyber Crime", status: "Pending Review" },
  { id: "3", type: "Harassment", status: "Resolved" }
];

export default function DashboardScreen() {
  
  const handleSubmit = () => {
    router.push('/status');
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Drawer>
       <Drawer.Screen name="Settings" options={{ title: "Settings" }} />
            <Drawer.Screen name="Logout" options={{ title: "Logout" }} />
      </Drawer>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Crime Connect</Text>
    </View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionCard}
        onPress={()=> router.push("/complaint")}>
          <MaterialIcons name="report" size={30} color="#fff" />
          <Text style={styles.actionText}>Report Crime</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}
        onPress={()=> router.push("/status")}>
          <FontAwesome5 name="search-location" size={28} color="#fff" />
          <Text style={styles.actionText}>Track Case</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.actionCard}>
          <MaterialIcons name="warning" size={30} color="#fff" />
          <Text style={styles.actionText}>Emergency</Text>
        </TouchableOpacity>
      </View>

      {/* Statistics */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Total Reports</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>4</Text>
          <Text style={styles.statLabel}>Active Cases</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Resolved</Text>
        </View>
      </View>

      {/* Recent Reports */}
      <Text style={styles.sectionTitle}>Recent Reports</Text>

      <FlatList
        data={recentReports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reportCard}>
            <Text style={styles.reportType}>{item.type}</Text>
            <Text style={styles.reportStatus}>{item.status}</Text>
          </View>
        )}
      />
       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>View All Complaints</Text>
              </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9"
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    marginBottom: 20
  },

  headerTitle: {
    color: "#000000",
    marginTop: 30,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },

  actionCard: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    width: 100
  },

  actionText: {
    color: "#fff",
    marginTop: 8,
    fontSize: 12,
    textAlign: "center"
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25
  },

  statCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 100,
    elevation: 3
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000"
  },

  statLabel: {
    fontSize: 12,
    marginTop: 5,
    color: "#555"
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 20
  },

  reportCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    elevation: 1,
    borderLeftWidth: 4,
    borderLeftColor: "#000000"
  },

  reportType: {
    fontSize: 15,
    fontWeight: "bold"
  },

  reportStatus: {
    marginTop: 5,
    color: "#555"
  },

  button: {
    backgroundColor: "#0f1627",
    padding: 15,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    marginBottom: 20
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});