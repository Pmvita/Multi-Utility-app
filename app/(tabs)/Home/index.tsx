import React from 'react';
import { View, Text, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LineChart, BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const HomePage: React.FC = () => {
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [30, 80, 45, 60, 95],
      },
    ],
  };

  const lineChartData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 72],
      },
    ],
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView style={{ padding: 15 }}>
        {/* Header Section */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '600' }}>Dashboard</Text>
          <Ionicons name="notifications" size={30} color="black" />
        </View>

        {/* Summary Section */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 15,
              borderRadius: 10,
              width: '48%',
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#555' }}>Total Sales</Text>
            <Text style={{ fontSize: 24, fontWeight: '700', color: '#007AFF', marginTop: 5 }}>$12,345</Text>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 15,
              borderRadius: 10,
              width: '48%',
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#555' }}>Users</Text>
            <Text style={{ fontSize: 24, fontWeight: '700', color: '#007AFF', marginTop: 5 }}>1,245</Text>
          </View>
        </View>

        {/* Line Chart */}
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#333' }}>Weekly Performance</Text>
          <LineChart
            data={lineChartData}
            width={screenWidth - 30}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#fff',
              },
            }}
            bezier
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
        </View>

        {/* Bar Chart */}
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#333' }}>Monthly Revenue</Text>
          <BarChart
            style={{ marginVertical: 8 }}
            data={barChartData}
            width={screenWidth - 30}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
          />
        </View>

        {/* Footer Section */}
        <View style={{ alignItems: 'center', paddingVertical: 15, borderTopWidth: 1, borderColor: '#ddd' }}>
          <Text style={{ fontSize: 14, color: '#888' }}>App Version: 1.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;