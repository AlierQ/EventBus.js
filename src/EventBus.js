class EventBus{
    constructor() {
        this.eventHash = {}
    }
    // 事件订阅
    on(eventName,callback){
        // 已经订阅过的插入新回调
        if(this.eventHash.hasOwnProperty(eventName)){
            this.eventHash[eventName].push(callback)
        }else{ // 未订阅的创建新订阅
            this.eventHash[eventName] = [callback]
        }
    }
    // 事件发布
    emit(eventName,data){
        // 事件订阅存在则发布
        if(this.eventHash.hasOwnProperty(eventName)){
            this.eventHash[eventName].forEach((callback)=>{
                callback(data)
            })
        }else{ // 事件订阅不存在
            console.error(`'${eventName}' Not Subscribed`)
        }
    }
    // 事件取消
    off(eventName){
        // 不传参数清空所有事件订阅
        if(eventName === undefined){
            this.eventHash = {}
        }else{
            // 删除对应事件订阅
            delete this.eventHash[eventName]
        }
    }
}

export default EventBus;