import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/_join';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '../constants';

export default function Join() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* Header Section */}
          <View style={styles.iconsection}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Image source={HEROLOGOGREEN} resizeMode="contain" />
            <View style={{ width: 24 }} />
          </View>

          {/* Title Section */}
          <View style={styles.titleTextGroup}>
            <Text style={styles.titleText}>Create Account</Text>
            <Text style={styles.subText}>
              Fill in your details to get started
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formGroup}>
            {/* Full Name */}
            <View>
              <Text style={styles.formLabel}>Full Name</Text>
              <TextInput
                style={styles.formControl}
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
              />
            </View>

            {/* Email */}
            <View>
              <Text style={styles.formLabel}>Email</Text>
              <TextInput
                style={styles.formControl}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password */}
            <View>
              <Text style={styles.formLabel}>Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput
                  style={styles.passwordControl}
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="#7B7B7B"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              // Handle sign up
              console.log('Sign up pressed');
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerGroup}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Or Continue With</Text>
            <View style={styles.divider} />
          </View>

          {/* Social Login Buttons */}
          <View style={styles.secondaryButtonGroup}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => console.log('Google sign in')}
              activeOpacity={0.8}
            >
              <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
              <Text style={styles.secondaryButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => console.log('Facebook sign in')}
              activeOpacity={0.8}
            >
              <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
              <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Footer - Sign In Link */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30, paddingBottom: 20 }}>
            <Text style={styles.signupTitleText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/signin')}>
              <Text style={styles.signupSubTitleText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}