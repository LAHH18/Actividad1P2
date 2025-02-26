import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WeatherCard from '../Components/WeatherCard';

const API_KEY = 'b6af45b732bfba52dbec83b0da1c35cd'; 
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Huejutla de Reyes,MX&appid=${API_KEY}&units=metric&lang=es`;

interface WeatherData {
  dt_txt: string;
  main: {
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  weather: {
    description: string;
  }[];
}

const WeatherAPI = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const filteredData = filterDataFor5Days(data.list);
        setWeatherData(filteredData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  const filterDataFor5Days = (data: WeatherData[]) => {
    const uniqueDays: string[] = [];
    const filteredData: WeatherData[] = [];

    data.forEach((item) => {
      const date = item.dt_txt.split(' ')[0]; 
      if (!uniqueDays.includes(date)) {
        uniqueDays.push(date);
        filteredData.push(item);
      }
    });

    return filteredData.slice(0, 5);
  };

  const renderItem = ({ item }: { item: WeatherData }) => (
    <WeatherCard
      date={item.dt_txt}
      tempMax={item.main.temp_max}
      tempMin={item.main.temp_min}
      rainProbability={item.pop * 100}
      weatherState={item.weather[0].description}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});

export default WeatherAPI;