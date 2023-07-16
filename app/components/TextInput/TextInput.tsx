import React, {useState} from 'react';
import {View, TextInput, TextInputProps, Text} from 'react-native';
import {Controller, Control} from 'react-hook-form';

import {Icon} from '@app/components';
import {colors} from '@app/theme';
import styles from './styles';

export interface TextInputWrapperProps extends TextInputProps {
  control?: Control<any>;
  name?: string;
  rules?: {};
  icon: string;
}

export function TextInputWrapper({
  control,
  name,
  rules,
  secureTextEntry,
  icon,
  style,
  ...rest
}: TextInputWrapperProps): JSX.Element {
  const [hidePassword, setHidePassword] = useState(true);
  const toggleHidePassword = () => setHidePassword(!hidePassword);

  if (!control || !name || !rules) {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.inputContainer}>
          <Icon name={icon} size={30} color={colors.darkGray} />
          <TextInput {...rest} style={styles.input} />
        </View>
      </View>
    );
  }

  if (secureTextEntry) {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Icon name={icon} size={30} color={colors.darkGray} />
              <TextInput
                {...rest}
                style={styles.input}
                onChangeText={onChange}
                value={value}
                secureTextEntry={hidePassword}
              />
              {hidePassword ? (
                <Icon
                  name="eye"
                  size={24}
                  color={colors.darkGray}
                  onPress={toggleHidePassword}
                />
              ) : (
                <Icon
                  name="eye-outline"
                  size={24}
                  color={colors.darkGray}
                  onPress={toggleHidePassword}
                />
              )}
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      />
    );
  }
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Icon name={icon} size={30} color={colors.darkGray} />
            <TextInput
              {...rest}
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          </View>
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

export default TextInputWrapper;
