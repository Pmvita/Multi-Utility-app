import React, { useState } from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const WeatherPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const forecast = [
    { day: "Monday", temp: "22°C", details: "Sunny with a light breeze.", icon: "sun" },
    { day: "Tuesday", temp: "18°C", details: "Cloudy with occasional rain.", icon: "cloud-rain" },
    { day: "Wednesday", temp: "24°C", details: "Partly cloudy and warm.", icon: "cloud-sun" },
    { day: "Thursday", temp: "19°C", details: "Thunderstorms expected.", icon: "bolt" },
    { day: "Friday", temp: "20°C", details: "Mild and partly sunny.", icon: "cloud" },
  ];

  const handleOpenModal = (day) => {
    setSelectedDay(day);
    setModalVisible(true);
  };

  return (
    <LinearGradient
      colors={["#6DD5FA", "#2980B9"]}
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <SafeAreaView>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#FFF",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Weather Forecast
        </Text>

        <FlatList
          data={forecast}
          keyExtractor={(item) => item.day}
          contentContainerStyle={{
            alignItems: "center",
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: 20,
                marginVertical: 10,
                borderRadius: 15,
                width: "90%",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5,
              }}
              onPress={() => handleOpenModal(item)}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                {item.day}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {item.temp}
              </Text>
              <FontAwesome5 name={item.icon} size={24} color="#FFA500" />
            </TouchableOpacity>
          )}
        />

        {/* Modal for detailed forecast */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <View
              style={{
                width: "85%",
                backgroundColor: "#FFF",
                padding: 25,
                borderRadius: 20,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 10,
              }}
            >
              <FontAwesome5 name={selectedDay?.icon} size={50} color="#FFA500" />
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  color: "#333",
                  marginTop: 15,
                }}
              >
                {selectedDay?.day}
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: "#FFA500",
                  marginTop: 10,
                }}
              >
                {selectedDay?.temp}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  color: "#666",
                  marginTop: 15,
                }}
              >
                {selectedDay?.details}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#1E90FF",
                  paddingVertical: 12,
                  paddingHorizontal: 30,
                  borderRadius: 15,
                  marginTop: 20,
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default WeatherPage;