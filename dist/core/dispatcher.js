import { EventListener } from "./event_listener";
var Dispatcher = (function () {
    function Dispatcher(application) {
        this.application = application;
        this.eventListenerMaps = new Map();
        this.started = false;
    }
    Dispatcher.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            this.eventListeners.forEach(function (eventListener) { return eventListener.connect(); });
        }
    };
    Dispatcher.prototype.stop = function () {
        if (this.started) {
            this.started = false;
            this.eventListeners.forEach(function (eventListener) { return eventListener.disconnect(); });
        }
    };
    Object.defineProperty(Dispatcher.prototype, "eventListeners", {
        get: function () {
            return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) { return listeners.concat(Array.from(map.values())); }, []);
        },
        enumerable: false,
        configurable: true
    });
    Dispatcher.prototype.bindingConnected = function (binding) {
        this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    };
    Dispatcher.prototype.bindingDisconnected = function (binding, clearEventListeners) {
        if (clearEventListeners === void 0) { clearEventListeners = false; }
        this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
        if (clearEventListeners)
            this.clearEventListenersForBinding(binding);
    };
    Dispatcher.prototype.handleError = function (error, message, detail) {
        if (detail === void 0) { detail = {}; }
        this.application.handleError(error, "Error ".concat(message), detail);
    };
    Dispatcher.prototype.clearEventListenersForBinding = function (binding) {
        var eventListener = this.fetchEventListenerForBinding(binding);
        if (!eventListener.hasBindings()) {
            eventListener.disconnect();
            this.removeMappedEventListenerFor(binding);
        }
    };
    Dispatcher.prototype.removeMappedEventListenerFor = function (binding) {
        var eventTarget = binding.eventTarget, eventName = binding.eventName, eventOptions = binding.eventOptions;
        var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
        var cacheKey = this.cacheKey(eventName, eventOptions);
        eventListenerMap.delete(cacheKey);
        if (eventListenerMap.size == 0)
            this.eventListenerMaps.delete(eventTarget);
    };
    Dispatcher.prototype.fetchEventListenerForBinding = function (binding) {
        var eventTarget = binding.eventTarget, eventName = binding.eventName, eventOptions = binding.eventOptions;
        return this.fetchEventListener(eventTarget, eventName, eventOptions);
    };
    Dispatcher.prototype.fetchEventListener = function (eventTarget, eventName, eventOptions) {
        var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
        var cacheKey = this.cacheKey(eventName, eventOptions);
        var eventListener = eventListenerMap.get(cacheKey);
        if (!eventListener) {
            eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
            eventListenerMap.set(cacheKey, eventListener);
        }
        return eventListener;
    };
    Dispatcher.prototype.createEventListener = function (eventTarget, eventName, eventOptions) {
        var eventListener = new EventListener(eventTarget, eventName, eventOptions);
        if (this.started) {
            eventListener.connect();
        }
        return eventListener;
    };
    Dispatcher.prototype.fetchEventListenerMapForEventTarget = function (eventTarget) {
        var eventListenerMap = this.eventListenerMaps.get(eventTarget);
        if (!eventListenerMap) {
            eventListenerMap = new Map();
            this.eventListenerMaps.set(eventTarget, eventListenerMap);
        }
        return eventListenerMap;
    };
    Dispatcher.prototype.cacheKey = function (eventName, eventOptions) {
        var parts = [eventName];
        Object.keys(eventOptions)
            .sort()
            .forEach(function (key) {
            parts.push("".concat(eventOptions[key] ? "" : "!").concat(key));
        });
        return parts.join(":");
    };
    return Dispatcher;
}());
export { Dispatcher };
