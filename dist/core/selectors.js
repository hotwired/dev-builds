export function attributeValueContainsToken(attributeName, token) {
    return "[".concat(attributeName, "~=\"").concat(token, "\"]");
}
