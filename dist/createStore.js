export default function createStore(dispatcher, initState) {
    var subscribers = [];
    var curState = initState;
    return {
        subscribe: function (subscriberFn) {
            subscribers.push(subscriberFn);
        },
        dispatch: function (action) {
            curState = JSON.parse(JSON.stringify(dispatcher(action, curState)));
            subscribers.forEach(function (subscriberFn) { return subscriberFn(curState); });
        },
    };
}
//# sourceMappingURL=createStore.js.map