export default function fixFiles(filenames) {
  const indexedFilenames = {};
  const fixedFilenames = filenames.map((filename) => {
    const accumulator = indexedFilenames[filename];
    if (accumulator) {
      accumulator.count += 1;
      return `${filename}(${accumulator.count})`;
    }
    indexedFilenames[filename] = { count: 0 };
    return filename;
  })
  return fixedFilenames
}
