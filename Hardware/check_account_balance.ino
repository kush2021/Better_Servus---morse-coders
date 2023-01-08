
#include <SPI.h>
#include <MFRC522.h>
#include <LiquidCrystal.h>

// Tag setup
#define SS_PIN 10
#define RST_PIN 9
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.

// LCD setup 
const int rs = 8, en = 7, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);
 
void setup() 
{

  // LCD setup 
  lcd.begin(16, 2);
  lcd.print("Present Your");
  lcd.setCursor(0, 1);
  lcd.print("Card");


  // serial setup
  Serial.begin(9600);   // Initiate a serial communication
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522
  // Serial.println("Approximate your card to the reader...");
  Serial.println();

}
void loop() 

{
  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
  //Show UID on serial monitor
  // Serial.print("UID tag :");
  String content= "";
  byte letter;
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
     Serial.print(mfrc522.uid.uidByte[i], HEX);
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  Serial.println();
  // Serial.print("Message : ");
  content.toUpperCase();
  if (content.substring(1) == "3C 15 7C 33") //change here the UID of the card/cards that you want to give access
  {
    // // set the cursor to column 0, line 1
//   // // (note: line 1 is the second row, since counting begins with 0):
//   // lcd.setCursor(0, 1);
//   // // print the number of seconds since reset:
    lcd.clear();
    lcd.print("Access granted");
    lcd.setCursor(0, 1);
    lcd.print("Balance: $1000");
    //Serial.println("Authorized access");
    Serial.println();
    delay(3000);
  
  }
 
 else   {
    Serial.println("Access denied");
    delay(3000);
  }


} 
