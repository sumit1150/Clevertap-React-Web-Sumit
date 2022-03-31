import logo from './logo.svg';
import './App.css';
import clevertap from 'clevertap-web-sdk';


// event without properties
/*clevertap.event.push("Product viewed");

// event with properties
clevertap.event.push("Product viewed", {
    "Product name": "Casio Chronograph Watch",
    "Category": "Mens Accessories",
    "Price": 59.99,
    "Date": new Date()
});*/



function App() {

  const pushCTEvent = () => {
    clevertap.event.push("WebEvent", {
      "Action":"Success",
      "Category":"Shirts",
      "Price":59.99,});
      alert("WebEvent pushed to CT");
  }

   const pushCTEvent2 = () => {
    clevertap.event.push("DemoWebEvent", {
      "Action":"Success",
      "Category":"Shirts",
      "Price":59.99,});
    alert("Event 2  pushed to CT");
   }

   const ctNotificationConsent= () => {
    clevertap.notifications.push({
      "titleText":'Would you like to receive Push Notifications?',
      "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
      "okButtonText":'Sign me up!',
      "rejectButtonText":'No thanks',
      "okButtonColor":'#f28046'});
    alert("Notification Consent pushed to CT");
   }

   const updateProfile = () => {
    clevertap.profile.push({
      "Site": {
  
      "tier": "Platinum",           
  }
})
    alert("profile func pushed to CT");
   }
   const loginFunction = () => {
    clevertap.onUserLogin.push({
      "Site": {
      "Name": "Sumit Sharma",            // String
      "Identity": 115037,              // String or number
      "Email": "sumitkumar782@gmail.com",         // Email address of the user
      "Phone": "+919351210270",           // Phone (with the country code)
      "Gender": "M",                     // Can be either M or F
      "DOB": new Date(),                 // Date of Birth. Date object
      // optional fields. controls whether the user will be sent email, push etc.
      "MSG-email": true,                // Disable email notifications
      "MSG-push": true,                  // Enable push notifications
      "MSG-sms": false,                   // Enable sms notifications
      "MSG-whatsapp": false,             // Enable WhatsApp notification
  }
})
    alert("login func func pushed to CT");
   }

  return (
   
<body>
        <p>This page is having Clevertap SDK in-built</p>
        <button onClick={loginFunction}>Login</button>
        <button onClick={pushCTEvent}>Push WebEvent</button>
        <button onClick={pushCTEvent2}>Push DemoWebEvent</button>
        <button onClick={ctNotificationConsent}>WebPushConsent</button>
        <button onClick={updateProfile}>profile Update</button>
    </body>

  );
}

export default App;
