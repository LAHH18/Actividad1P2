import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherCardProps {
  date: string;
  tempMax: number;
  tempMin: number;
  rainProbability: number;
  weatherState: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  date,
  tempMax,
  tempMin,
  rainProbability,
  weatherState,
}) => {
  const getBackgroundColor = (tempMax: number) => {
    if (tempMax < 20) return '#87CEEB';
    if (tempMax >= 21 && tempMax <= 30) return '#FFD700';
    return '#FFA500';
  };

  return (
    <View style={[styles.card, { backgroundColor: getBackgroundColor(tempMax) }]}>
      <Text style={styles.text}>Fecha: {date}</Text>
      <Text style={styles.text}>Máx: {tempMax}°C</Text>
      <Text style={styles.text}>Mín: {tempMin}°C</Text>
      <Text style={styles.text}>Lluvia: {rainProbability.toFixed(0)}%</Text>
      <Text style={styles.text}>Estado: {weatherState}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default WeatherCard;