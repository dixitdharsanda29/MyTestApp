import React from 'react';
import { View, ScrollView } from 'react-native';
import AppContainer from '@components/AppContainer';
import AppHeader from '@components/AppHeader';
import { constantStrings } from '@constants/constantStrings';
import Box from '@components/Box';
import AppLabelField from '@components/AppLabelField';
import AppErrorField from '@components/AppErrorField';
import AppTextInput from '@components/AppTextInput';
import AppDatePicker from '@components/AppDatePicker';
import CountryPickerField from '@components/CountryPickerField';
import AppButton from '@components/AppButton';
import { screenPadding } from '@constants/theme';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import VStack from '@components/VStack';

const Settings = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      birthdate: null,
      country: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(constantStrings.NAME_REQUIRED),
      email: Yup.string()
        .email(constantStrings.INVALID_EMAIL)
        .required(constantStrings.EMAIL_REQUIRED),
      birthdate: Yup.date().required(constantStrings.BIRTHDATE_REQUIRED),
      country: Yup.string().required(constantStrings.COUNTRY_REQUIRED),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <AppContainer>
      <AppHeader title={constantStrings.SETTINGS} />
      <Box flex={1} px={screenPadding}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <VStack space={4} pt={5} pb={5}>
            <View>
              <AppLabelField label={constantStrings.NAME} />
              <AppTextInput
                placeholder={constantStrings.ENTER_NAME}
                value={formik.values.name}
                onChangeText={formik.handleChange('name')}
                onBlur={formik.handleBlur('name')}
              />
              <AppErrorField
                message={formik.touched.name ? formik.errors.name : null}
              />
            </View>

            <View>
              <AppLabelField label={constantStrings.EMAIL_ADDRESS} />
              <AppTextInput
                placeholder={constantStrings.ENTER_EMAIL}
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                keyboardType="email-address"
              />
              <AppErrorField
                message={formik.touched.email ? formik.errors.email : null}
              />
            </View>

            <View>
              <AppLabelField label={constantStrings.BIRTHDATE} />
              <AppDatePicker
                value={formik.values.birthdate}
                onChange={date => formik.setFieldValue('birthdate', date)}
              />
              <AppErrorField
                message={
                  formik.touched.birthdate ? formik.errors.birthdate : null
                }
              />
            </View>

            <View>
              <AppLabelField label={constantStrings.COUNTRY} />
              <CountryPickerField
                value={formik.values.country}
                onChange={code => formik.setFieldValue('country', code)}
              />
              <AppErrorField
                message={formik.touched.country ? formik.errors.country : null}
              />
            </View>

            <AppButton
              name={constantStrings.SAVE}
              onPress={formik.handleSubmit}
            />
          </VStack>
        </ScrollView>
      </Box>
    </AppContainer>
  );
};

export default Settings;
