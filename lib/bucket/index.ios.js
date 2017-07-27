import { NativeModules } from 'react-native';

const { RNSKBucket } = NativeModules;

const Bucket = {
  setString: (key, value, groupName) => {
    RNSKBucket.setString(key, value, groupName);
  },
  setDictionary: (key, value, groupName) => {
    RNSKBucket.setDictionary(key, value, groupName);
  },
  get: (key, groupName) => {
    return new Promise((resolve, reject) => {
      RNSKBucket.get(key, groupName, (value) => {
        resolve(value);
      });
    });
  },
  remove: (key, groupName) => {
    RNSKBucket.remove(key, groupName);
  }
};

export default Bucket;
