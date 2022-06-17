## EventBut.js
原生js实现EventBut事件订阅发布

## 使用方式
### 引入
```js
import EventBus from 'yourpath/EventBut.js'
```
### 使用
```js
const eventBut = new EventBut()
```
## 实现API
- `eventBut.on()`：事件订阅
- `eventBut.emit()`：事件发布
- `eventBut.off()`：订阅取消