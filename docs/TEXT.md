## To use Bucket to share data among your main application and share extension.

To save a value on your main app:

```javascript
import { RNSKBucket } from 'react-native-swiss-knife'

const myGroup = 'group.groupName'
RNSKBucket.set('test', 'myValue', myGroup)
```

and then, to read the saved data on your shared extension:

```javascript
import { RNSKBucket } from 'react-native-swiss-knife'

const myGroup = 'group.groupName'
RNSKBucket.get('test', myGroup).then( (value) => console.log(value) ) // myValue
```
