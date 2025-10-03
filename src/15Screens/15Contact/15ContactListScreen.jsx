import React from 'react';
import {Text, FlatList } from 'react-native';
import ContactItem from '../../components/contactItem';
import { ContactUsers } from './UserContactInfo';
import { styles } from '../../Style/contactListScreenStyling';  

const ContactListScreen = () => {
  const renderItem = ({ item }) => (
    <ContactItem name={item.name} email={item.email} />
  );

  return (
    <FlatList
      data={ContactUsers}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      ListHeaderComponent={<Text style={styles.heading}>Contact</Text>}
    />
  );
};

export default ContactListScreen;