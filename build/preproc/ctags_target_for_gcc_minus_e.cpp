# 1 "/Users/soo/Desktop/UF/workspace/NODEMCU copy/ex01/sketch.ino"
# 2 "/Users/soo/Desktop/UF/workspace/NODEMCU copy/ex01/sketch.ino" 2
# 3 "/Users/soo/Desktop/UF/workspace/NODEMCU copy/ex01/sketch.ino" 2

const char *ssid = "SK_WiFiGIGA2347";
const char *password = "2006036591";
MiniCom com;

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
