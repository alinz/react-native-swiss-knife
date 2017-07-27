## To use Bucket to share data among your main application and share extension.

### iOS
You need to create App Groups to use buckets.

You have these functions:
- setString()
- setDictionary()
- get()
- remove()

### Android
You have these functions:
- setString()
- get()
- remove()

To save a value on your main app:

```javascript
import { RNSKBucket } from 'react-native-swiss-knife'

const myGroup = 'group.groupName'
RNSKBucket.setString('test', 'myValue', myGroup)
```

and then, to read the saved data on your shared extension:

```javascript
import { RNSKBucket } from 'react-native-swiss-knife'

const myGroup = 'group.groupName'
RNSKBucket.get('test', myGroup).then( (value) => console.log(value) ) // myValue
```
