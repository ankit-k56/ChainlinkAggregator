export default function BytestoString(bytes32HexString: any): string {
  const bytes32String = bytes32HexString.startsWith("0x")
    ? bytes32HexString.slice(2)
    : bytes32HexString;

  // Convert hex string to a byte array (Uint8Array)
  const byteArray = new Uint8Array(bytes32String.length / 2);
  for (let i = 0; i < byteArray.length; i++) {
    byteArray[i] = parseInt(bytes32String.slice(i * 2, i * 2 + 2), 16);
  }

  // Use TextDecoder for UTF-8 decoding
  const decoder = new TextDecoder();
  const text = decoder.decode(byteArray);

  // Remove trailing null characters (optional)
  const trimmedText = text.replace(/\0+$/, "");

  return trimmedText;
}
