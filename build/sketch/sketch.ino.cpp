#include <Arduino.h>
#line 1 "/Users/soo/Desktop/UF/workspace/NODEMCU copy/ex01/sketch.ino"
#include <ESP8266WiFi.h>
#include <MiniCom.h>

const char *ssid = "SK_WiFiGIGA2347";
const char *password = "2006036591";
MiniCom com;

#line 8 "/Users/soo/Desktop/UF/workspace/NODEMCU copy/ex01/sketch.ino"
void wifi_connect();
#line 23 "/Users/soo/Desktop/UF/workspace/NODEMCU copy/ex01/sketch.ino"
void setup();
#line 28 "/Users/soo/Desktop/UF/workspace/NODEMCU copy/ex01/sketch.ino"
void loop();
#line 8 "/Users/soo/Desktop/UF/workspace/NODEMCU copy/ex01/sketch.ino"
void wifi_connect(){
    WiFi.begin(ssid,password);
    com.print(0,"try to connect");
    Serial.println();
    while(WiFi.status() !=WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    com.print(0, "WiFi connected");
    com.print(1, WiFi.localIP().toString().c_str());
    Serial.println();
    Serial.println(WiFi.localIP());
}

void setup() {
    com.init();
    wifi_connect();
}

void loop() {
    com.run();
}
