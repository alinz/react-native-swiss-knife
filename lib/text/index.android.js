import { NativeModules } from 'react-native'

const { RNSKText } = NativeModules

const Text = {
  calcSize: (value, fontFamily, fontSize) => {
    return new Promise((resolve, reject) => {
      RNSKText.calcSize(value, fontFamily, fontSize, (err, width, height) => {
        if (err) {
          reject(err)
        } else {
          resolve({ width, height })
        }
      })
    })
  }
}

export default Text
