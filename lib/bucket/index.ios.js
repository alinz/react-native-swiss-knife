import { NativeModules } from 'react-native'

const { RNSKBucket } = NativeModules

const Bucket = {
  set: (key, value, groupName) => {
    return new Promise(resolve => {
      RNSKBucket.set(key, value, groupName, () => {
        resolve()
      })
    })
  },
  get: (key, groupName) => {
    return new Promise(resolve => {
      RNSKBucket.get(key, groupName, (value) => {
        resolve(value)
      })
    })
  },
  remove: (key, groupName) => {
    return new Promise(resolve => {
      RNSKBucket.remove(key, groupName, () => {
        resolve()
      })
    })
  }
};

export default Bucket
