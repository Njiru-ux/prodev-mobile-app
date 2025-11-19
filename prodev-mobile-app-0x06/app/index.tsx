import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '../constants';

const { width, height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();

  return (
    <View style={localStyles.wrapper}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={localStyles.backgroundImage}
        resizeMode="cover"
      >
        {/* Overlay for better text visibility */}
        <View style={localStyles.overlay} />
        
        <View style={styles.logoContainer}>
          <Image 
            source={HEROLOGO} 
            resizeMode="contain"
            style={{ width: 120, height: 120 }}
          />
          
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>ProDev</Text>
          </View>
          
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Your gateway to professional development
            </Text>
          </View>
        </View>

        <View style={localStyles.bottomSection}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={() => router.push('/join')}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonPrimaryText}>Get Started</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={() => router.push('/signin')}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonGroupSubText}>
            <Text style={localStyles.footerText}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push('/signin')}>
              <Text style={localStyles.footerLink}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const localStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 60,
    zIndex: 1,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  footerLink: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});