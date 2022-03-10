#include <WifiMiniCom.h>

const char *ssid = "SK_WiFiGIGA2347";
const char *password = "2006036591";
MiniCom com;

void setup(){
    com.init(ssid,password);
}

void loop(){
    com.run();
}