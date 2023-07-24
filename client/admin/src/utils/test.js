// 网络信息

const connection =
  navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const effectiveType = connection.effectiveType;
const downlink = connection.downlink;

console.log("connection: ", connection);
console.log("Effective connection type:", effectiveType);
console.log("Downlink speed:", downlink);
// 地理位置 API
navigator.geolocation.getCurrentPosition(function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
});

// 媒体捕获 API
navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then(function (stream) {
    // Do something with the media stream
  })
  .catch(function (error) {
    // Handle the error
  });

//付款请求 API

const supportedPaymentMethods = [
  {
    supportedMethods: "basic-card",
    data: {
      supportedNetworks: ["visa", "mastercard"],
    },
  },
];

const paymentDetails = {
  total: {
    label: "Total",
    amount: { currency: "USD", value: "10.00" },
  },
};

const paymentRequest = new PaymentRequest(
  supportedPaymentMethods,
  paymentDetails
);

paymentRequest
  .show()
  .then(function (paymentResponse) {
    console.log("paymentResponse: ", paymentResponse);
    // Process the payment response
  })
  .catch(function (error) {
    console.log("error: ", error);
    // Handle errors
  });

// 电池状态 API
navigator.getBattery().then(console.log);
// Web蓝牙API;

navigator.bluetooth
  .requestDevice({ filters: [{ services: ["heart_rate"] }] })
  .then(function (device) {
    // Connect to the selected device
  })
  .catch(function (error) {
    // Handle errors
  });

// 环境光传感器 API
var sensor = new AmbientLightSensor();

sensor.onreading = function () {
  var illuminance = sensor.illuminance;
  console.log("Illuminance:", illuminance);
};

sensor.start();

//网页通知 API
const notification = new Notification("Email received", {
  body: "You received an email. Read it now!",
});

// 速度计 API
const accelerometer = new Accelerometer({ frequency: 60 });

accelerometer.addEventListener("reading", () => {
  const { x, y, z } = accelerometer;

  console.log("Acceleration X:", x);
  console.log("Acceleration Y:", y);
  console.log("Acceleration Z:", z);
});

accelerometer.start();
// 媒体会话 API
navigator.mediaSession.setActionHandler("play", function () {
  // Handle play action
});

navigator.mediaSession.setActionHandler("pause", function () {
  // Handle pause action
});

// Add more event listeners for other media actions

//震动 API
navigator.vibrate(3000); // Vibrate for three seconds

//设备方向 API
window.addEventListener("deviceorientation", function (event) {
  console.log("Device orientation:", event.alpha, event.beta, event.gamma);
});
