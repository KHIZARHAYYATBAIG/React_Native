import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#0f172a', // Dark navy
    letterSpacing: 1.2,
  },
  list: {
    backgroundColor: '#f1f5f9', // Light gray-blue
    paddingHorizontal: 14,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 18,
    marginVertical: 10,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6, // Android shadow
    borderLeftWidth: 5,
    borderLeftColor: '#3b82f6', // Bright accent (blue stripe)
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e40af', // Bold deep blue
    marginBottom: 6,
  },
  email: {
    fontSize: 15,
    fontWeight: '500',
    color: '#475569', 
  },
});
