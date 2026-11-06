import { runSafely } from "./util-run-safely.js";

// Accessibility Patch: Component Observer (Utility)
// Desc: Registers a component fix. Every element matching `selector` gets the fix applied once when found, then
// (unless observe is false) its own MutationObserver that re-applies the fix whenever that component's container changes.
// Options:
//   target:   function(component) returning the node to observe. Defaults to the component itself. Use the parent
//             when the site replaces the component wholesale instead of updating it in place (e.g. #search-results).
//   config:   MutationObserver options. Defaults to { childList: true, subtree: true }.
//   debounce: ms to wait for a burst of mutations to settle before re-applying. Defaults to 1000.
//   observe:  false to apply the fix once per component with no observer, for fixes that only bind their own
//             listeners or manage their own observer internally.
// Note: If a component is replaced, its observer disconnects itself on the next run, and bindComponents() (run by
// the sitewide observer) picks up the replacement as a new component.

const magicBulletComponents = [];

export function observeComponent(selector, fix, options) {

  options = options || {};

  magicBulletComponents.push({

    selector: selector,
    fix: fix,
    target: options.target || function(component) { return component; },
    config: options.config || { childList: true, subtree: true },
    debounce: options.debounce === undefined ? 1000 : options.debounce,
    observe: options.observe !== false,
    bound: new WeakSet()

  });

}

export function bindComponents() {

  magicBulletComponents.forEach(function(entry) {

    document.querySelectorAll(entry.selector).forEach(function(component) {

      if (entry.bound.has(component)) return;

      entry.bound.add(component);

      bindComponent(entry, component);

    });

  });

}

function bindComponent(entry, component) {

  runSafely(entry.fix, component);

  if (!entry.observe) return;

  var target = entry.target(component);

  if (!target) return;

  var timeout = null;

  var observer = new MutationObserver(function() {

    clearTimeout(timeout);

    timeout = setTimeout(run, entry.debounce);

  });

  function run() {

    // The component was replaced. Stop observing; bindComponents() will bind its replacement.

    if (!component.isConnected) {

      observer.disconnect();

      return;

    }

    // Disconnect while the fix runs so its own DOM changes don't re-trigger it.

    observer.disconnect();

    runSafely(entry.fix, component);

    observer.observe(target, entry.config);

  }

  observer.observe(target, entry.config);

}
