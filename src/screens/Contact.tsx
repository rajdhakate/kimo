import {Linking, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../components/CustomText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {shadowColor} from '../theme/colors';

type Props = {};

const Contact = ({}: Props) => {
  const sendEmail = () => {
    const email = 'engrdhakate@gmail.com';
    const subject = 'Application Developer opportunity';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    Linking.openURL(mailtoLink).catch(err =>
      console.error('An error occurred', err),
    );
  };

  const makePhoneCall = () => {
    Linking.openURL('tel:+91-9654343680').catch(err =>
      console.error('An error occurred', err),
    );
  };

  return (
    <View style={styles.modalView}>
      <CustomText
        text="Raj Dhakate"
        textType="header"
        style={styles.marginBottom(24)}
      />
      <TouchableOpacity
        onPress={() => {
          sendEmail();
        }}>
        <CustomText
          text="engrdhakate@gmail.com"
          style={styles.marginBottom(8)}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          makePhoneCall();
        }}>
        <CustomText text="+91-9654343680" style={styles.marginBottom(8)} />
      </TouchableOpacity>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: shadowColor,
    width: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 35,
    paddingBottom: 40,
    width: '100%',
  },
  marginBottom: margin => ({
    marginBottom: margin,
  }),
});
