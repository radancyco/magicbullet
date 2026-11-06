// Accessibility Patch: Message Formatting (Utility)
// Desc: Substitutes {token} placeholders in a language-pack string with the given values. Keeping the full
// sentence as one translatable template (rather than concatenating translated fragments) lets each language
// reorder or rephrase around the variable parts as needed, instead of being locked into English word order.

export function formatMessage(template, values) {

  return template.replace(/\{(\w+)\}/g, function(match, key) {

    return Object.prototype.hasOwnProperty.call(values, key) ? values[key] : match;

  });

}
