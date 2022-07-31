// Array of each network's preceding numbers 
const mtnComp = ["0803", "0806", "0703", "0706", "0813", "0816", "0810", "0814", "0903", "0906"]
const airtelComp = ["0802", "0808", "0708", "0812", "0701", "0902"]
const gloComp = ["0811", "0905", "0805", "0805", "0705", "0815", "0807"]
const etisalatComp = ["0809", "0817", "0818", "0909", "0908"]


// Declaring Variables / Selecting Elements
const phoneNumber = document.getElementById("phoneNum")
const networkImg = document.getElementById("signupimg")




//  Function to show network-icon based on the number inputted


phoneNumber.addEventListener("keyup", () => {
  let phoneNumberValue = phoneNumber.value
  console.log(phoneNumberValue)

  if (phoneNumberValue == "") {
    networkImg.style.display = "none"
    networkImg.src = "./"
  }

  for (let i = 0; i < mtnComp.length; i++) {
    if (phoneNumberValue.startsWith(mtnComp[i])) {
      // console.log("MTN")
      networkImg.style.display = "block"
      networkImg.src = "./images/mtn.png"
    }
  }

  for (let i = 0; i < airtelComp.length; i++) {
    if (phoneNumberValue.startsWith(airtelComp[i])) {
      console.log("Airtel")
      networkImg.style.display = "block"
      networkImg.src = "./images/airtel.png"
    }
  }

  for (let i = 0; i < gloComp.length; i++) {
    if (phoneNumberValue.startsWith(gloComp[i])) {
      console.log("Glo")
      networkImg.style.display = "block"
      networkImg.src = "./images/glo.png"
    }
  }

  for (let i = 0; i < etisalatComp.length; i++) {
    if (phoneNumberValue.startsWith(etisalatComp[i])) {
      console.log("etisalat")
      networkImg.style.display = "block"
      networkImg.src = "./images/9mobile.png"
    }
  }
})