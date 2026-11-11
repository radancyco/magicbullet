// Accessibility Patch: Run Safely (Utility)
// Desc: Runs a fix and contains any error it throws, so one broken fix doesn't stop the fixes after it (or, inside
// observeComponent(), leave that component's observer disconnected). Logs the error with the fix's name for debugging.

export function runSafely(fix, component) {

  try {

    fix(component);

  } catch (error) {

    console.error("MagicBullet - " + fix.name + "() failed.", error);

  }

}
