(function () {
  let value;
  Object.defineProperty(window, '__INITIAL_STATE__', {
    configurable: true,
    enumerable: true,
    set(newValue) {
      try {
        if (newValue && newValue.featureSwitch && newValue.featureSwitch.customOverrides) {
          newValue.featureSwitch.customOverrides['rweb_age_assurance_flow_enabled'] = false;
        }
      } catch (e) {}
      value = newValue;
    },
    get() {
      return value;
    }
  });
})();