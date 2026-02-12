import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function LogoutScreen() {

  const handleLogout = () => {
    // Later you can clear token or AsyncStorage here

    router.replace("/(tabs)"); // Goes to login page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you sure you want to logout?</Text>

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Confirm Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelBtn}
        onPress={() => router.back()}
      >
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
  },
  logoutBtn: {
    backgroundColor: "#e53935",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelBtn: {
    marginTop: 15,
  },
  cancelText: {
    color: "#0a1f44",
  },
});
