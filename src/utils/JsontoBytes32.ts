export default function jsonValueToBytes32(value: string | number) {
  // Handle different data types
  if (typeof value === "string") {
    // Truncate long strings and convert to UTF-8 bytes
    const trimmedString = value.slice(0, 31); // Assuming null termination
    const encoder = new TextEncoder();
    const bytes = encoder.encode(trimmedString);

    // Ensure 32 bytes by padding with zeros
    const paddedBytes = new Uint8Array(32);
    paddedBytes.set(bytes, 0);
    return paddedBytes;
  } else if (typeof value === "number") {
    // Convert number to a byte array (may require adjustments based on size)
    const byteArray = new Uint8Array(4); // Assuming 32-bit integer
    const buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);
    view.setInt32(0, value, false); // Adjust endianness if needed
    byteArray.set(Array.from(buffer), 0);
    return byteArray;
  } else {
    throw new Error("Unsupported data type for conversion to bytes32");
  }
}
