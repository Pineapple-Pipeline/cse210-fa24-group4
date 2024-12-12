<div style="text-align: center;">
  <video width="800" height="450" controls style="display: block; margin: auto;">
    <source src="media/jwt-generator.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>


## Overview
The JWT Token Generator tool securely creates JSON Web Tokens (JWTs) for user authentication and authorization, enabling safe transmission of claims between a client and server. It supports customizable payloads and expiration settings to meet various application security requirements.

---

## Features
- Copy to clipboard button
- User intuitive design
- Responsive UI
---

## Usage

### Web Tool:
1. Paste your JWT header into the header input box.
2. Paste your JWT Payload into the payload input box.
3. Paste your secret key into the secret key input box.
2. Click the "Generate" button.
3. Click the "Copy to Clipboard" button to copy output.

---

## Tutorial

### Formatting a JSON File
1. Input the header:
    - In the Header text input field, enter the desired JWT header in JSON format. For example:
```
    {
  "alg": "HS256",
  "typ": "JWT"
    }
```
2. Input the Payload:
    - In the Payload text input field, enter the payload that contains the claims for the token. For example:
```
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```
3. Enter the Secret Key:
    - In the Secret Key input field, enter your secret key to sign the JWT. For example: `mySuperSecretKey`

4. Generate the Token:
    - Click the "Generate" button to create the JWT. The generated token will appear in the output area.

5. Copy the Token:
    - Click the "Copy to Clipboard" button to copy the generated JWT to your clipboard for use in your application.

---

## Troubleshooting

### Common Errors
- **Error:** "Error: Header, Payload, and Secret Key must not be empty."
  - **Solution:** Check that you have inputed the necessary items for the JWT token.
- **Error:** "Nothing to copy!"
	- **Solution:** Ensure there is something in the output field by formatting JSON.
- **Error:** "No JSON to download!"
	- **Solution:** Ensure there is something in the output field by formatting JSON.

---