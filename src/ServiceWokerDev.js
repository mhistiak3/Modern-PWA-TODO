function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/ServiceWorker.js`;
  navigator.serviceWorker.register(swUrl).then((response) => {
      console.log('Running...');
  });
}

export default swDev;
