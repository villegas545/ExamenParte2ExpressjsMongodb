import servidor from "./server/";

servidor.listen(3002, () => {
  console.log("Servidor corriendo en puerto 3002");
});
