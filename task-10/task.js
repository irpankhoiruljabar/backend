/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
 const showDownload = (result) => {
  console.log("Download selesai");
  console.log("Hasil Download: " + result);
};

const download = (callShowDownload) => {
  return new Promise(() => {
      setTimeout(() => {
          const result = "windows-10.exe";
          callShowDownload(result);
      }, 3000);
  })
};

const main = async () => {
console.log(await download(showDownload));
};

main();


* TODO:
* - Refactor callback ke Promise atau Async Await
* - Refactor function ke ES6 Arrow Function
* - Refactor string ke ES6 Template Literals
*/
