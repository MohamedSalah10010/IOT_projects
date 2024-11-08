#include <ESP8266WiFi.h>
#include <WebSocketsClient.h>

WebSocketsClient wsc;

const char *ssid = "Salah";
const char *pass = "";

#define SERVER  "192.168.43.89"
#define PORT    4000
#define URL     "/"

void websocketEvent(WStype_t type, uint8_t *data, size_t length){
  switch(type){
    case(WStype_CONNECTED):
      Serial.printf("connected to server\n");
      break;
    case WStype_DISCONNECTED:
      Serial.printf("Disconnected!\n");
      break;
    case(WStype_TEXT):
      int val;
      val= atoi(((const char *)data)); // ascii to int 
     val= map(val,0,255,0,1023);// 8 bit reg --> 10 bit reg 0 : 255 256 - - - - -  - - - 0 : 1023 1024 .............. 
      analogWrite(D1,val);
      //Serial.printf("value: %d \n",val);
      Serial.printf("data: %s\n",data);
      break;
  }
}

void setup(){
  pinMode(D1, OUTPUT);
  Serial.begin(115200);

  WiFi.begin(ssid, pass);

  while(WiFi.status() != WL_CONNECTED){
    Serial.println(".");
    delay(500);
  }

  Serial.println(WiFi.SSID());
  Serial.println(WiFi.localIP());

  wsc.begin(SERVER, PORT, URL);
  wsc.onEvent(websocketEvent);
  // try ever 1000 again if connection has failed
  wsc.setReconnectInterval(1000);
}

void loop(){
  wsc.loop();
}
