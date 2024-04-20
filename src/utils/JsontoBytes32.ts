export default function jsonValueToBytes32(value: string | number) {
  if (typeof value === "string") {
    const trimmedString = value.slice(0, 31);
    const encoder = new TextEncoder();
    const bytes = encoder.encode(trimmedString);

    const paddedBytes = new Uint8Array(32);
    paddedBytes.set(bytes, 0);
    return paddedBytes;
  } else if (typeof value === "number") {
    const byteArray = new Uint8Array(4);
    const buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);
    view.setInt32(0, value, false);
    byteArray.set(Array.from(buffer), 0);
    return byteArray;
  } else {
    throw new Error("Unsupported data type for conversion to bytes32");
  }
}
