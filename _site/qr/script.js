let qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://github.com/sonata22",
  width: 220,
  height: 220,
  colorDark: "#FFFFFF",
  colorLight: "#000000",
  correctLevel: QRCode.CorrectLevel.H
});