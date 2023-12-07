### Run local development (nodejs 16+) 

1. install dependencies `npm install`.
2. run app `npm run dev`.
3. build app `npm run build`.

### Project available at

1. https://qventus-login-thiagobauer.vercel.app/
2. https://qventus-login-git-master-thiagobauer.vercel.app/

### Notes

Hey there! This is a quick documentation on how you should try this app.
It is very simple and intuitive, all you need to do is:

1. Click the "Change Rules" button
2. Select the rules you want to apply
3. Click the "Confirm" button -> this is a MUST
3. Input your password considering the rules you selected
4. Click the "Sign up" button

If you have any considerations about it, I will be really happy to know.

### Few improvements ideas

1. The password component could be shorter, by mapping the ‘passwordReqs’ variable instead. The same goes for the “Change Rules” Modal, specifically the body part.
2. Colors should be in Hex instead of string -> improves performance
3. The password input itself should be type=”password”, and also should have a “show password” button.
4. I was planning on simulating a real signup and login, by using localstorage to save information and authenticate users. Unfortunately, I didn't have the time to finish the implementation, so I removed that feature, but I would love to talk about it.

