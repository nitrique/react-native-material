import { Platform } from 'react-native';

export default function getNativeDriverDefault() {
  return Platform.OS !== 'ios';
}
