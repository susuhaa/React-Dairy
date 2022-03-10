#include <WifiMiniCom.h>

const char *ssid = "SK_WiFiGIGA2347";
const char *password = "2006036591";

MiniCom com;
WiFiServer server(80);

void setup(){
    com.init(ssid,password);
    server.begin();
}

void loop(){
    WiFiClient client = server.available();
    if(!client){
        return;
    }
Serial.println("new client");
while(!client.available()){
    delay(1);
}
String request = client.readStringUntil('\r');
Serial.println(request);
client.flush();

client.println("HTTP/1.1 200 OK");
client.println("Contnet_Type: text/html");
client.println("");
client.println("<!DOCTYPE HTML>");
client.println("<html>");
client.println("HELLO WORLD!");
client.println("</html>");
delay(1);
Serial.println("Client disconnected");
Serial.println("");


}