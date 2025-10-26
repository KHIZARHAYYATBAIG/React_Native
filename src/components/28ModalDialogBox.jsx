import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';

const ModalDialogBox = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.openButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.openButtonText}>Show Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}

        // ya lazmi use krna ha keo kai hum do plateform kai liya bnai gai app to save zone mah rehny kai liya hum ya use krein gai.
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Beautiful Modal ✨</Text>
            <Text style={styles.modalText}>Beautiful No1</Text>
            <Text style={styles.modalText}>Beautiful No2</Text>
            <Text style={styles.modalText}>Beautiful No3</Text>
            <Text style={styles.modalText}>Beautiful No4</Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6F8',
  },
  openButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  openButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    color: '#555',
    marginVertical: 3,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 25,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ModalDialogBox;
